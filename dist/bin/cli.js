#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Generator_1 = require("../src/Generator");
var DatabaseConnection_1 = require("../src/DatabaseConnection");
var commander_1 = require("commander");
var Config_1 = require("../src/Config");
// Initalise Commander
var program = new commander_1.Command();
// Postgres connection string example: postgresql://username:password@localhost:port/databasename
// Set up CLI options
program.version("1.0.0");
program
    .requiredOption("-cs, --connectionString <connectionString>", "Connection string to the database")
    .option("-s, --schema <schema>", "DB schema to generate types from", "public")
    .option("-d, --debug", "Enable debug mode", false)
    .option("-o, --output <output>", "Where TS types will be generated", "./src/types/generated/DBTypes.ts")
    .option("-g, --generate", "Generate react hooks types", false)
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    var options, config, db;
    return __generator(this, function (_a) {
        options = program.opts();
        config = new Config_1.Config(options);
        db = new DatabaseConnection_1.DatabaseConneciton(config);
        // TODO: Use Chalk to make this look prettier
        db.isReady()
            .then(function () { return __awaiter(void 0, void 0, void 0, function () {
            var generator;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("\n[Success]: Database connection established!");
                        generator = new Generator_1.Generator(db, config);
                        console.log("[Success]: Generator initialised!");
                        return [4 /*yield*/, generator.generate()];
                    case 1:
                        _a.sent();
                        console.log("[Success]: Types have been generated to " + config.output + " !");
                        process.exit(0);
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) {
            console.log("[Error]: \n " + err);
            process.exit(0);
        });
        return [2 /*return*/];
    });
}); });
program.parseAsync(process.argv);
//# sourceMappingURL=cli.js.map