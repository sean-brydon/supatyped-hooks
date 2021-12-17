"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = exports.Success = exports.Error = void 0;
var chalk_1 = __importDefault(require("chalk"));
exports.Error = chalk_1.default.bold.red;
exports.Success = chalk_1.default.bold.green;
exports.Warning = chalk_1.default.hex("#FFA500");
var DebugLog = function (message, debugType) { };
//# sourceMappingURL=logger.js.map