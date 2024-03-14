const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: String,
  correo: String,  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;