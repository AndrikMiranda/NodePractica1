"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeRouter_1 = __importDefault(require("./routers/HomeRouter"));
const ContactoRouter_1 = __importDefault(require("./routers/ContactoRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.port || 3000;
        this.app.set('port', this.port);
        this.app.use(express_1.default.json());
        this.configurarServidor();
    }
    configurarServidor() {
        this.app.use('/', HomeRouter_1.default);
        this.app.use('/api/contacto', ContactoRouter_1.default);
    }
    iniciar() {
        this.app.listen(this.port, () => {
            console.log('Servicio corriendo en el puerto: ', this.port);
        });
    }
}
const server = new Server();
exports.default = server.iniciar();
