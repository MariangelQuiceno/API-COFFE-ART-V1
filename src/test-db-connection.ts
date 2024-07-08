import { db } from './db/db';

// Consulta de prueba
const query = 'SELECT 1 + 1 AS result';

db.query(query, (err, results) => {
    if (err) {
        console.error('Error al ejecutar la consulta:', err);
        return;
    }
    console.log('Resultado de la consulta:', results);
});

// Cerrar la conexión cuando haya terminado
db.end();
