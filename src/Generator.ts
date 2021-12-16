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
    console.log(await this.generateEnums());
    console.log(await this.generateTableTypes());
    // fs.writeFile(
    //   this.config.output,
    //   content,
    //   (err) => {
    //     if (err) {
    //       console.log(`[Error]: ${err}`);
    //     }
    //   }
    // );
    /**
     * [
     * {
     *  "table":[{'column_name':'id', 'data_type':'int'}, {'column_name':'name', 'data_type':'varchar'}]
     * }
     * ]
     */
  }

  private async generateEnums() {
    const enums = await this.db.getEnums();
    const content = Object.keys(enums).map((enumName) => {
      return `export enum ${enumName} {${enums[enumName].join(",")}}\n`;
    });
    return content;
  }

  private async generateTableTypes() {
    const schema = await this.db.getSchemaDefinition();
    schema.forEach((t) => {
      console.log(t);
    });
  }
}
