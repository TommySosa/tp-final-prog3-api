import { pool } from '../db.js'

export const registerUser = async (req, res) => {
    const { nombre, email, contraseña, rol  } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO usuarios (nombre, email, contraseña, rol) VALUES (?,?,?,?)', [nombre,email,contraseña,rol])
        res.send({
            id: rows.insertId,
            nombre,
            email,
            contraseña,
            rol
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal al registrar el usuario'
        })
    }
}

export const loginUser = async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        // Verificar si el usuario existe en la base de datos
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'El usuario no existe' });
        }
        
        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const usuario = rows[0];
        if (contraseña !== usuario.contraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Autenticación exitosa
        res.send({
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol // Agregar el campo del rol del usuario en la respuesta
        });
    } catch (error) {
        return res.status(500).json({ message: 'Algo salió mal al iniciar sesión' });
    }
};