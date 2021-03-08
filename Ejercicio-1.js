/*Ejercicio 1 - Cargar de forma automática incremental, un array de números 
a partir de un largo dado por el usuario. */

let largo = parseInt(prompt("Ingrese el largo del array de numeros"));
let arreglo = [];

for (let i = 0; i < largo; i++) 
{
    arreglo.push(i);
}

for (let i = 0; i < arreglo.length; i++) 
{
    console.log(arreglo[i]);
}








