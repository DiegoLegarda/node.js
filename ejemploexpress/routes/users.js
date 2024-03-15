const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Ruta de registro
router.post('/signup', async (req, res) => {
  // Recoger datos del body
    const { username, password } = req.body;
    if(!req.body){
      return res.status(500).send('Error al registrar usuario.');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.send('Usuario registrado correctamente.');
        res.sendFile(__dirname+'/public/login.html');    
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Error al registrar usuario.');
    }
});
  
  // Ruta de inicio de sesión
  router.post('/login', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Usuario no encontrado.');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).send('Contraseña incorrecta.');
        }
        // Si el usuario y la contraseña son válidos, puedes redirigir o enviar la respuesta adecuada aquí
        return res.redirect('/ingreso.html');
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).send('Error al iniciar sesión.');
    }
});


module.exports = router;