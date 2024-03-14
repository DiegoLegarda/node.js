const express=require('express');
const app=express();
const puerto=3000;
const mongoose=require('mongoose');
const User = require('./models/user');
app.use(express.urlencoded({ extended: true }));

app.post('/usuarios/nuevo', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Datos del usuario no proporcionados' });
      }
    try {
    const { nombre, correo } = req.body; // Obtén los datos del nuevo usuario desde la solicitud
    const newUser = new User({ nombre, correo }); // Crea un nuevo usuario con los datos proporcionados
    const savedUser = await newUser.save(); // Guarda el nuevo usuario en la base de datos
    res.json(savedUser); // Devuelve el usuario guardado como respuesta en formato JSON
  } catch (err) {
    console.error('Error al incluir un nuevo usuario:', err);
    res.status(500).json({ message: 'Error al incluir un nuevo usuario' });
  }
});
//const users = require('./routes/users');

  app.use(express.json());
 // app.use('/api/users', users);

mongoose.connect("mongodb://localhost:27017/BaseDeDatos").then(()=>{
    console.log("Conexión exitosa a la base de datos",mongoose.connection.db.databaseName);
}).catch((error)=>{
    console.log("Error de conexión a la base de datos");
    console.log(error);
});

app.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await User.find({}); // Lee todos los usuarios
      res.json(usuarios); // Devuelve los usuarios como respuesta en formato JSON
    } catch (err) {
      console.error('Error al leer usuarios:', err);
      res.status(500).json({ message: 'Error al leer usuarios' });
    }
  });

  


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});
app.get('/formulario',(req,res)=>{
    //res.send('hola formulario')
    res.sendFile(__dirname+'/public/formulario.html');    
});
app.get('/ruta',(req,res)=>{
    res.send('Hola ruta');
    console.log(2+3);
});
app.get('/ruta/nueva',(req,res)=>{
    res.send(`Hola ruta nueva ${2+5}`);    
});

app.post('/envioformulario',(req,res)=>{
    console.log(req.body);
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let correo=req.body.correo;
    res.send(`recibido ${nombre} ${apellido} ${correo}`);
});


app.listen(puerto,()=>{
    console.log(`escuchando en http://localhost:${puerto}`);
});

