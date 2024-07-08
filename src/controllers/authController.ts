import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { db } from '../db/db';
import { RowDataPacket } from 'mysql2';

// Tipo para los resultados de la consulta de usuario
interface UsuarioRow extends RowDataPacket {
    contrasena: string;
    // Otras propiedades del usuario según tu base de datos
}

export const register = (req: Request, res: Response) => {
    const { nombre, correo_electronico, telefono, nombre_usuario, contrasena, rol } = req.body;

    // Encriptar la contraseña
    const hashedPassword = bcrypt.hashSync(contrasena, 10);

    // Consultar si el usuario ya existe
    db.query<UsuarioRow[]>('SELECT * FROM Usuarios WHERE nombre_usuario = ?', [nombre_usuario], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error en la consulta a la base de datos' });
            return;
        }

        if (results.length === 0) {
            // Insertar el nuevo usuario en la base de datos
            const query = 'INSERT INTO Usuarios (nombre, correo_electronico, telefono, nombre_usuario, contrasena, rol, fecha_creacion, estado) VALUES (?, ?, ?, ?, ?, ?, NOW(), ?)';
            db.query(query, [nombre, correo_electronico, telefono, nombre_usuario, hashedPassword, rol, 'Activo'], (err, result) => {
                if (err) {
                    console.error('Error al insertar el usuario:', err);
                    res.status(500).json({ error: 'Error al insertar el usuario en la base de datos' });
                    return;
                }
                res.status(201).json({ message: 'Usuario registrado exitosamente' });
            });
        } else {
            res.status(400).json({ error: 'El nombre de usuario ya existe' });
        }
    });
};

export const login = (req: Request, res: Response) => {
    const { nombre_usuario, contrasena } = req.body;

    // Consultar el usuario por nombre de usuario
    db.query<UsuarioRow[]>('SELECT * FROM Usuarios WHERE nombre_usuario = ?', [nombre_usuario], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error en la consulta a la base de datos' });
            return;
        }

        if (results.length > 0) {
            const usuario = results[0];
            // Verificar la contraseña
            if (bcrypt.compareSync(contrasena, usuario.contrasena)) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ error: 'Contraseña incorrecta' });
            }
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    });
};
