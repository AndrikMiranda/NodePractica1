"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controllers/HomeController"));
class HomeRouter {
    constructor() {
        this.router = express_1.Router();
        this.configurarRouteador();
    }
    configurarRouteador() {
        this.router.get('/', HomeController_1.default.goHome);
    }
}
const homeRouter = new HomeRouter();
exports.default = homeRouter.router;
