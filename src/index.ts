import express, { Application } from 'express';
import homeRouter from './routers/HomeRouter';
import contactoRouter from './routers/ContactoRouter';

class Server {

    app: Application;
    port: any;

    constructor() {
        this.app = express();
        this.port = process.env.port || 3000;
        this.app.set('port', this.port);
        this.app.use(express.json());
        this.configurarServidor();
    }

    configurarServidor(): void {
        this.app.use('/', homeRouter);
        this.app.use('/api/contacto', contactoRouter);
    }

    iniciar(): void {
        this.app.listen(this.port, () => {
            console.log('Servicio corriendo en el puerto: ', this.port);
        })
    }
}

const server = new Server();
export default server.iniciar();