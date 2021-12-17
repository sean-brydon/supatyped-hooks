import { Config } from "./Config";
import { DatabaseConneciton } from "./DatabaseConnection";
export declare class Generator {
    private db;
    private config;
    /**
     *  Initialise the Generator
     */
    constructor(_db: DatabaseConneciton, _config: Config);
    generate(): Promise<void>;
    private generateEnums;
    private generateTableTypes;
}
