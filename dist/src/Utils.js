"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.udtNameToTSType = void 0;
var udtNameToTSType = function (udtName, allEnums) {
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
            if (allEnums[udtName]) {
                return "" + udtName;
            }
            console.log("[Error] Unknown type setting as 'any':", udtName);
            return "any";
    }
};
exports.udtNameToTSType = udtNameToTSType;
//# sourceMappingURL=Utils.js.map