import { Config } from "./Config";
import { DatabaseConneciton } from "./DatabaseConnection";
import fs from "fs";

export class Generator {
  private db: DatabaseConneciton;
  private config: Config;
  /**
   *  Initialise the Generator
   */
  constructor(_db: DatabaseConneciton, _config: Config) {
    this.db = _db;
    this.config = _config;
  }

  public async generate() {
    const enums = await this.generateEnums();
    const tables = await this.generateTableTypes();

    console.log(enums);
    console.log(tables);

    const content = `${enums}\n${tables}`;
    let dir = this.config.output.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, "");

    // Create folder if it does not exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFile(this.config.output, content, { flag: "a+" }, (err) => {
      if (err) {
        console.log(`[Error]: ${err}`);
      }
    });
  }

  private async generateEnums() {
    const enums = await this.db.getEnums();

    const content = Object.keys(enums).map((enumName) => {
      return `export enum ${enumName} {${enums[enumName].join(",")}}\n`;
    });
    return content.join("");
  }

  private async generateTableTypes() {
    const schema = await this.db.getColumnsWithType();
    const content = Object.keys(schema).map((table) => {
      const exportHeader = `export interface ${table} {\n`;
      const types = schema[table]
        .map((column) => {
          return `\t${column.column_name}: ${column.data_type};\n`;
        })
        .join("");
      const tail = `}\n`;
      return `${exportHeader}${types}${tail}`;
    });

    return content.join("");
  }
}
