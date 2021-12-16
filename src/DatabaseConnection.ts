import { Config } from "./Config";
import { Client } from "pg";
import { Column, Database, EnumTypes } from "./types";
import { udtNameToTSType } from "./Utils";
export class DatabaseConneciton implements Database {
  private db: Client;
  /**
   * Create DB connection
   */
  constructor(private config: Config) {
    this.db = new Client({
      connectionString: this.config.connectionString,
    });
  }

  public async isReady() {
    await this.db.connect();
  }

  public async closeConnection(): Promise<void> {
    await this.db.end();
  }

  public async getEnums(): Promise<EnumTypes> {
    // REF: https://stackoverflow.com/questions/9540681/list-postgres-enum-type
    // select n.nspname as enum_schema,
    //        t.typname as enum_name,
    //        e.enumlabel as enum_value
    // from pg_type t
    //    join pg_enum e on t.oid = e.enumtypid
    //    join pg_catalog.pg_namespace n ON n.oid = t.typnamespace;

    const res = await this.db.query<{
      name: string;
      value: string;
    }>(`select
          t.typname as name,
          e.enumlabel as value
          from pg_type t
          join pg_enum e on t.oid = e.enumtypid
          join pg_catalog.pg_namespace n ON n.oid = t.typnamespace;`);

    const enums: EnumTypes = {};
    res.rows.forEach((row) => {
      if (!enums[row.name]) {
        enums[row.name] = [];
      }
      enums[row.name].push(row.value);
    });
    return enums;
  }

  public async getTables(): Promise<string[]> {
    const res = await this.db.query<{ table_name: string }>(
      `select table_name from information_schema.tables where table_schema = '${this.config.schema}'`
    );
    return res.rows.map((row) => row.table_name);
  }

  public async getColumnsWithType(
    table: string
  ): Promise<Record<string, Column[]>> {
    // Get table columns and data type from postgres

    const res = await this.db.query<Column>(
      `select column_name, udt_name as data_type from information_schema.columns where table_schema = '${this.config.schema}' and table_name = '${table}'`
    );
    const enums = await this.getEnums();
    let tableDefinition: Record<string, Column[]> = {};
    res.rows.forEach((row) => {
      if (!tableDefinition[table]) {
        tableDefinition[table] = [];
      }
      tableDefinition[table].push({
        column_name: row.column_name,
        data_type: udtNameToTSType(row.data_type, enums),
      });
    });

    return tableDefinition;
  }

  public async getSchemaDefinition(): Promise<Record<string, Column[]>[]> {
    const tables = await this.getTables();
    const schema: Record<string, Column[]>[] = [];

    for (const table of tables) {
      schema.push(await this.getColumnsWithType(table));
    }
    return schema;
  }
}
