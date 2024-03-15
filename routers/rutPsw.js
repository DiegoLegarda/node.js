const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Userpsw = require('../models/UserPsw.js'); // Importa el modelo de usuario

// Ruta de registro
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const Userpsw = new Userpsw({ username, password: hashedPassword });
  await Userpsw.save();
  res.send('Usuario registrado correctamente.');
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const Userpsw = await Userpsw.findOne({ username });
  if (!Userpsw) {
    return res.status(400).send('Usuario no encontrado.');
  }
  const isValidPassword = await bcrypt.compare(password, Userpsw.password);
  if (!isValidPassword) {
    return res.status(400).send('Contraseña incorrecta.');
  }
  res.send('Inicio de sesión exitoso.');
});

module.exports = router;