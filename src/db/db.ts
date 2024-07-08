import mysql, { Connection } from 'mysql2';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    database: 'CoffeArtBD'
};

export const db: Connection = mysql.createConnection(dbConfig);

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

export default db;
