const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    nombre:String,
    genero:String,
    anio:Number,   
    });

const Musica=mongoose.model('Musica',userSchema);
module.exports = Musica;