"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const db_1 = require("./db/db"); // Importa la conexión a la base de datos
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/auth', authRoutes_1.default);
const PORT = process.env.PORT || 3000;
db_1.db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        process.exit(1); // Termina el proceso si no se puede conectar a la base de datos
    }
    else {
        console.log('Conexión a la base de datos MySQL establecida');
        // Solo escucha en el puerto si la conexión a la base de datos fue exitosa
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
});
//# sourceMappingURL=index.js.map