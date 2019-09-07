import { Router } from 'express';
import contactoController from '../controllers/ContactoController'

class ContactoRouter {
    public router = Router();
    constructor() {
        this.setRouter();
    }

    setRouter(): void {
        this.router.get('/', contactoController.list);
    }
}

const contactoRouter = new ContactoRouter();
export default contactoRouter.router;