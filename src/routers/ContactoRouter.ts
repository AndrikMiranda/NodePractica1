import { Router } from 'express';
import contactoController from '../controllers/ContactoController'

class ContactoRouter {
    public router = Router();
    constructor() {this.setRouter();}

    setRouter(): void {
        this.router.get('/', contactoController.list);
        this.router.get('/:id', contactoController.getById);
        this.router.post('/', contactoController.create);
    }
}



const contactoRouter = new ContactoRouter();
export default contactoRouter.router;