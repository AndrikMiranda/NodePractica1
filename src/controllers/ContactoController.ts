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

    public async getById(req: Request, resp: Response): Promise<any> {
        // Recuperar el ID del contacto a consultar
        const { id } = req.params;

        const contacto = await conn.then(
            connection => {
                return connection.query('select * from contacto where id = ?', [id]);
            }
        ).then(
            contacto => {
                resp.json(contacto);
            }
        );
    }

    public async create(req: Request, resp: Response): Promise<any> {
        await conn.then(
            connection => {
                connection.query('insert into contacto set ?', [req.body]);
                resp.json({ text: Messages.CONT_INSERTED });
            }
        ).catch(() => {
            resp.json({ text: Messages.CONN_FAIL });
        });
    }


    public async updat(req: Request, resp: Response){
        const { id } = req.params;

        await conn.then(
            connection => {
                connection.query('update contacto set ? where id = ?',[req.body, id]);
                resp.json({text:Messages.CONT_UPDATED});
            }
        ).catch(() =>{
            resp.json({text:Messages.CONN_FAIL})
        });
    }

    public async delete(req: Request, resp: Response) {
        //Obtener el ID de la url desde la URL
        const { id } = req.params;

        await conn.then(
            connection => {
                connection.query('delete from contacto where id = ?', [id]);
                resp.json({ text: Messages.CONT_DELETED });
            }
        ).catch(
            () => {
                resp.json({ text: Messages.CONN_FAIL });
            }
        );
    }


}

const contactoController = new ContactoController();
export default contactoController;
