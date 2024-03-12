const funciones=require('./funciones.js');
const os=require('os');

console.log(funciones.datos);
setTimeout(funciones.suma,2,10,30);
console.log(funciones.saludar());
console.log(os.platform());
//console.log(os.platform());

console.log("Hola mundo");
console.warn("Esta es una advertencia");
console.assert("Hola"==="hola","No son iguales");
console.error(new Error("Este es un error"));
console.table([1,2,3,4,5]);
setImmediate(funciones.saludar)
console.table([{a:1,b:2},{a:3,b:4}]);
console.table(funciones.datos);

