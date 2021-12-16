export interface Database {
  closeConnection(): Promise<void>;
  isReady(): Promise<void>;
  getEnums(): Promise<any>;
  getTables(): Promise<string[]>;
}

export type EnumTypes = Record<string, string[]>;
export type Column = { column_name: string; data_type: string };
