"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../db/db");
const register = (req, res) => {
    const { nombre, correo_electronico, telefono, nombre_usuario, contrasena, rol } = req.body;
    // Encriptar la contraseña
    const hashedPassword = bcrypt_1.default.hashSync(contrasena, 10);
    // Consultar si el usuario ya existe
    db_1.db.query('SELECT * FROM Usuarios WHERE nombre_usuario = ?', [nombre_usuario], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error en la consulta a la base de datos' });
            return;
        }
        if (results.length === 0) {
            // Insertar el nuevo usuario en la base de datos
            const query = 'INSERT INTO Usuarios (nombre, correo_electronico, telefono, nombre_usuario, contrasena, rol, fecha_creacion, estado) VALUES (?, ?, ?, ?, ?, ?, NOW(), ?)';
            db_1.db.query(query, [nombre, correo_electronico, telefono, nombre_usuario, hashedPassword, rol, 'Activo'], (err, result) => {
                if (err) {
                    console.error('Error al insertar el usuario:', err);
                    res.status(500).json({ error: 'Error al insertar el usuario en la base de datos' });
                    return;
                }
                res.status(201).json({ message: 'Usuario registrado exitosamente' });
            });
        }
        else {
            res.status(400).json({ error: 'El nombre de usuario ya existe' });
        }
    });
};
exports.register = register;
const login = (req, res) => {
    const { nombre_usuario, contrasena } = req.body;
    // Consultar el usuario por nombre de usuario
    db_1.db.query('SELECT * FROM Usuarios WHERE nombre_usuario = ?', [nombre_usuario], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error en la consulta a la base de datos' });
            return;
        }
        if (results.length > 0) {
            const usuario = results[0];
            // Verificar la contraseña
            if (bcrypt_1.default.compareSync(contrasena, usuario.contrasena)) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            }
            else {
                res.status(401).json({ error: 'Contraseña incorrecta' });
            }
        }
        else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    });
};
exports.login = login;
