import { Command, OptionValues } from "commander";

interface IConfig {
  connectionString: string;
  schema: string;
  output: string;
  debug: boolean;
  generate: boolean;
}

export class Config implements IConfig {
  /**
   * Private variables
   */
  private _connectionString: string;
  private _generate: boolean;
  private _schema: string;
  private _output: string;
  private _debug: boolean;

  /**
   *Initialise the Config
   */
  constructor(options: OptionValues) {
    const { connectionString, generate, schema, output, debug } = options;
    this._connectionString = connectionString;
    this._generate = generate;
    this._schema = schema;
    this._output = output;
    this._debug = debug;
  }

  /**
   * Setters
   */
  public get connectionString(): string {
    return this._connectionString;
  }

  public get schema(): string {
    return this._schema;
  }

  public get output(): string {
    return this._output;
  }

  public get debug(): boolean {
    return this._debug;
  }

  public get generate(): boolean {
    return this._generate;
  }
}
