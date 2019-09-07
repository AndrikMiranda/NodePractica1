import { Request, Response } from 'express';

class HomeController {
    public goHome(req: Request, resp: Response) {
        resp.json({
            text: 'Hola, estas en Home'
        });
    }
}

const homeController = new HomeController();
export default homeController;