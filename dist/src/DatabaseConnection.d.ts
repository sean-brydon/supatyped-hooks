import { Config } from "./Config";
import { Column, Database, EnumTypes } from "./types";
export declare class DatabaseConneciton implements Database {
    private config;
    private db;
    /**
     * Create DB connection
     */
    constructor(config: Config);
    isReady(): Promise<void>;
    closeConnection(): Promise<void>;
    getEnums(): Promise<EnumTypes>;
    getTables(): Promise<string[]>;
    getColumnsWithType(): Promise<Record<string, Column[]>>;
}
