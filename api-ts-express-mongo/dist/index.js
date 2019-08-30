"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
// import routes
var usuario_1 = __importDefault(require("./routes/usuario"));
// Server Class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://localhost/cognosdb';
        mongoose_1.default.set('useFindAndModify', false);
        mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(function (db) { console.log('MongoDB esta conectado'); });
        // Settings
        this.app.set('port', process.env.PORT || 3000);
        // middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    };
    Server.prototype.routes = function () {
        var router = express_1.default.Router();
        this.app.use('/api-cognos/usuarios', usuario_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server escuchando en el puerto ', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
