"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactoController_1 = __importDefault(require("../controllers/ContactoController"));
class ContactoRouter {
    constructor() {
        this.router = express_1.Router();
        this.setRouter();
    }
    setRouter() {
        this.router.get('/', ContactoController_1.default.list);
        this.router.get('/:id', ContactoController_1.default.getById);
        this.router.post('/', ContactoController_1.default.create);
    }
}
const contactoRouter = new ContactoRouter();
exports.default = contactoRouter.router;
