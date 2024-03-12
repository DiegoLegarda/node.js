function saludo(){
    console.log("Hola mundo");
}

function suma(a,b){
    console.log(a+b);
    return a+b;
}

const personas=[{nombre:"Juan",edad:20,pais:"Colombia"},
{nombre:"Ana",edad:15,pais:"Chile"},
{nombre:"Pedro",edad:25,pais:"Argentina"}]

module.exports={saludar:saludo,
                suma:suma,
                datos:personas};



