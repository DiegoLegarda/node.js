const express=require('express');
const app=express();
const puerto=3000;
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});
app.get('/ruta',(req,res)=>{
    res.send('Hola ruta');
});
app.listen(puerto,()=>{
    console.log(`escuchando en http://localhost:${puerto}`);
});

