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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionDB_1 = __importDefault(require("../conf/ConexionDB"));
const Messages_1 = __importDefault(require("../util/Messages"));
class ContactoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield ConexionDB_1.default.then(connection => {
                return connection.query('select * FROM contacto');
            }).then(list => {
                if (list.length > 0) {
                    resp.json(list);
                }
                else {
                    resp.json({ text: Messages_1.default.CONT_EMPTY });
                }
            }).catch(() => {
                resp.json({ text: Messages_1.default.CONN_FAIL });
            });
        });
    }
    getById(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            // Recuperar el ID del contacto a consultar
            const { id } = req.params;
            const contacto = yield ConexionDB_1.default.then(connection => {
                return connection.query('select * from contacto where id = ?', [id]);
            }).then(contacto => {
                resp.json(contacto);
            });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ConexionDB_1.default.then(connection => {
                connection.query('insert into contacto set ?', [req.body]);
                resp.json({ text: Messages_1.default.CONT_INSERTED });
            }).catch(() => {
                resp.json({ text: Messages_1.default.CONN_FAIL });
            });
        });
    }
    updat(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield ConexionDB_1.default.then(connection => {
                connection.query('update contacto set ? where id = ?', [req.body, id]);
                resp.json({ text: Messages_1.default.CONT_UPDATED });
            }).catch(() => {
                resp.json({ text: Messages_1.default.CONN_FAIL });
            });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            //Obtener el ID de la url desde la URL
            const { id } = req.params;
            yield ConexionDB_1.default.then(connection => {
                connection.query('delete from contacto where id = ?', [id]);
                resp.json({ text: Messages_1.default.CONT_DELETED });
            }).catch(() => {
                resp.json({ text: Messages_1.default.CONN_FAIL });
            });
        });
    }
}
const contactoController = new ContactoController();
exports.default = contactoController;
