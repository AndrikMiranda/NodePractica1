"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    goHome(req, resp) {
        resp.json({
            text: 'Hola, estas en Home'
        });
    }
}
const homeController = new HomeController();
exports.default = homeController;
