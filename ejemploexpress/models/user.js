const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    nombre:String,
    apellido:String,
    correo:String,
    edad:Number,   
    });

const User=mongoose.model('User',userSchema);
module.exports = User;

