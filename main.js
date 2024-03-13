const fs=require('fs');

/*
fs.readFile('Nuevonombre.txt', 'utf8', (error, contenido) => {
  if (error) 
    throw error;
    console.log(contenido);  
});

/*
fs.rename('texto.txt', 'Nuevonombre.txt', (error) => {
    if (error) throw error;
    console.log('nombre cambiado');
});*/
/*
fs.appendFile("Nuevonombre.txt", "Hola mundo", (error) => {
    if (error) throw error;
    console.log('Texto añadido al archivo');
});
*/
/*
fs.writeFile( "texto.txt", "Hola mundo", (error) => {
    if (error) throw error;
    console.log('Archivo excrito');
});
*/
/*fs.unlink("texto.txt", (error) => {
    if (error) throw error;
    console.log('Archivo eliminado');
});*/


fs.writeFileSync("texto.txt", "Hola mundo");
fs.appendFileSync("texto.txt", "\nuna segunda linea");
console.log(fs.readFileSync("texto.txt", "utf8"));
fs.unlinkSync("texto.txt");
fs.unlinkSync("text.txt");


// 1. crear un archivo
// 2. Adicionar una linea nueva en el archivo
// 3. leer el archivo
// 4. renombrar el archivo
// 5. leer el archivo
// 6. eliminar el archivo.