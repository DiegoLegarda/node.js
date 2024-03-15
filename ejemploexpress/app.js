const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const puerto=3000;
const userRoutes = require('../routers/rutPsw.js');


mongoose.connect('mongodb://localhost:27017/basedatos').then(
    ()=>{console.log(`Conectado a la base de datos ${mongoose.connection.db.databaseName}`);
    })
    .catch((error)=>{console.log('Error al conectar a la base de datos');
                    console.log(error);
    });
// Usar las rutas de usuario
app.use('/api/user', userRoutes);
/*
const newMusica = new Musica({ nombre: 'Ejemplo', genero:'pop', anio: 2021});
newMusica.save()
     .then(() => console.log("Musica creada"))
     .catch((err) => console.error("Error al crear musica:", err));
*/


/*
    const newUser = new User({ nombre: 'Ejemplo', apellido:'perez', correo: 'ejemplo@example.com',edad:25});
    newUser.save()
      .then(user => console.log('Usuario creado:', user))
      .catch(err => console.error('Error al crear usuario:', err));

      const newUser2 = new User({ nombre: 'Ana', apellido:'Pia', correo: 'anapia@example.com',edad:20});
      
        newUser2.save()
        .then(user => console.log('Usuario creado:', user))
        .catch(err => console.error('Error al crear usuario:', err));
        
        User.find()
        .then(users => console.log('Usuarios:', users))
        .catch(err => console.error('Error al buscar usuarios:', err));

        User.findOneAndUpdate({ nombre: 'Ejemplo' }, { edad: 35 }, { new: true })
        .then(user => console.log('Usuario actualizado:', user))
        .catch(err => console.error('Error al actualizar usuario:', err));

        User.find()
        .then(users => console.log('Usuarios:', users))
        .catch(err => console.error('Error al buscar usuarios:', err));

        User.findOneAndDelete({ nombre: 'Ejemplo' })
        .then(user => console.log('Usuario eliminado:', user))
        .catch(err => console.error('Error al eliminar usuario:', err));


      // */

      app.post('/usuarios/nuevo', async (req, res) => {
        if (!req.body) {
            return res.status(400).json({ message: 'Datos del usuario no proporcionados' });
          }
        try {
        const { nombre, apellido, correo } = req.body
        const newUser = new User({ nombre, apellido, correo,edad:25 }); 
        const savedUser = await newUser.save(); 
        res.json(savedUser); 
    } catch (err) {
        console.error('Error al incluir un nuevo usuario:', err);
        res.status(500).json({ message: 'Error al incluir un nuevo usuario' });
      }
    });
    


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const validarFormulario = (req, res, next) => {
    console.log(req.body);
    const { nombre, apellido, correo } = req.body;
  if (!nombre) {
      return res.status(400).send('Nombre es obligatorio');
    }
    if (!apellido) {
        return res.status(400).send('apellido es obligatorio');
      }
    if (!correo) {
        return res.status(400).send('correo es obligatorios');
      }  
    next();
  };
  

app.post('/formulario/enviar',validarFormulario,(req,res)=>{
    console.log(req.body);
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const correo=req.body.correo;
    res.send(`Datos recibidos: ${nombre}  ${apellido} ${correo}`);
});



app.get('/formulario',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});


app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});
app.get('/ruta',(req,res)=>{
    res.send('Hola ruta');
});
app.listen(puerto,()=>{
    console.log(`escuchando en http://localhost:${puerto}`);
});

