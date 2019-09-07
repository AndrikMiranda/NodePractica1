import { Request, Response } from 'express';
import conn from '../conf/ConexionDB'
import Messages from '../util/Messages';

class ContactoController {
    public async list(req: Request, resp: Response): Promise<any> {
        const list = await conn.then(
            connection => {
                return connection.query('select * FROM contacto');
            }
        ).then(
            list => {
                if (list.length > 0) {
                    resp.json(list);
                } else {
                    resp.json({ text: Messages.CONT_EMPTY });
                }
            }
        ).catch(() => {
            resp.json({ text: Messages.CONN_FAIL });
        });
    }
}

const contactoController = new ContactoController();
export default contactoController;
