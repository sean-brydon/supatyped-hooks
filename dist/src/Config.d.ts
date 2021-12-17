import { OptionValues } from "commander";
interface IConfig {
    connectionString: string;
    schema: string;
    output: string;
    debug: boolean;
    generate: boolean;
}
export declare class Config implements IConfig {
    /**
     * Private variables
     */
    private _connectionString;
    private _generate;
    private _schema;
    private _output;
    private _debug;
    /**
     *Initialise the Config
     */
    constructor(options: OptionValues);
    /**
     * Setters
     */
    get connectionString(): string;
    get schema(): string;
    get output(): string;
    get debug(): boolean;
    get generate(): boolean;
}
export {};
