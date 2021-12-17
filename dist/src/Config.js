"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config = /** @class */ (function () {
    /**
     *Initialise the Config
     */
    function Config(options) {
        var connectionString = options.connectionString, generate = options.generate, schema = options.schema, output = options.output, debug = options.debug;
        this._connectionString = connectionString;
        this._generate = generate;
        this._schema = schema;
        this._output = output;
        this._debug = debug;
    }
    Object.defineProperty(Config.prototype, "connectionString", {
        /**
         * Setters
         */
        get: function () {
            return this._connectionString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "output", {
        get: function () {
            return this._output;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "generate", {
        get: function () {
            return this._generate;
        },
        enumerable: false,
        configurable: true
    });
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=Config.js.map