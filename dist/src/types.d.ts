export interface Database {
    closeConnection(): Promise<void>;
    isReady(): Promise<void>;
    getEnums(): Promise<any>;
    getTables(): Promise<string[]>;
}
export declare type EnumTypes = Record<string, string[]>;
export declare type Column = {
    column_name: string;
    data_type: string;
};
