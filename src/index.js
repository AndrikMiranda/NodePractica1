"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var HomeRouter_1 = __importDefault(require("./routers/HomeRouter"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = process.env.port || 3000;
        this.app.set('port', this.port);
        this.app.use(express_1.default.json());
        this.configurarServidor();
    }
    Server.prototype.configurarServidor = function () { this.app.use('/', HomeRouter_1.default); };
    Server.prototype.iniciar = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Servicio corriendo en el puerto: ', _this.port);
        });
    };
    return Server;
}());
var server = new Server();
exports.default = server.iniciar();
