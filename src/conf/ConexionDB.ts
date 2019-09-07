// Importacion de paquetes

import mysql from 'promise-mysql';
import keys from './keys';

const conn = mysql.createPool(keys.config);

conn.then(
    connection =>{
        console.log('Conectado');
        connection.end;
    }
);

export default conn;