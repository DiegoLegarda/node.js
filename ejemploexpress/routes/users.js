const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Ruta de registro
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const User = new User({ username, password: hashedPassword });
    await User.save();
    res.send('Usuario registrado correctamente.');
  });
  
  // Ruta de inicio de sesión
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const User= await User.findOne({ username });
    if (!User) {
      return res.status(400).send('Usuario no encontrado.');
    }
    const isValidPassword = await bcrypt.compare(password, User.password);
    if (!isValidPassword) {
      return res.status(400).send('Contraseña incorrecta.');
    }
    res.send('Inicio de sesión exitoso.');
  });
  
  module.exports = router;