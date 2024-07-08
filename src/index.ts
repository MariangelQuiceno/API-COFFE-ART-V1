import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import { db } from './db/db'; // Importa la conexión a la base de datos

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        process.exit(1); // Termina el proceso si no se puede conectar a la base de datos
    } else {
        console.log('Conexión a la base de datos MySQL establecida');

        // Solo escucha en el puerto si la conexión a la base de datos fue exitosa
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
});
