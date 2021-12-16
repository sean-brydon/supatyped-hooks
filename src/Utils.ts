import { EnumTypes } from "./types";

export const udtNameToTSType = (
  udtName: string,
  allEnums: EnumTypes
): string => {
  switch (udtName) {
    case "bpchar":
    case "char":
    case "varchar":
    case "text":
    case "citext":
    case "uuid":
    case "bytea":
    case "inet":
    case "time":
    case "timetz":
    case "interval":
    case "tsvector":
    case "name":
      return "string";
    case "int2":
    case "int4":
    case "int8":
    case "float4":
    case "float8":
    case "numeric":
    case "money":
    case "oid":
      return "number";
    case "bool":
      return "boolean";
    case "json":
    case "jsonb":
      return "unknown";
    case "date":
    case "timestamp":
    case "timestamptz":
      return "Date";
    case "point":
      return "{ x: number, y: number }";
    default:
      return "WIP-ENUM";
  }
};
