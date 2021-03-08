/*Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor
que coincida con el índice en las posiciones impares. */

let largo = parseInt(prompt("Ingrese el largo del array de numeros"));
let arreglo = [];

for (let i = 0; i < largo; i++) 
{
    if(i % 2 === 0)
    {
        arreglo.push(0);
    }
    else
    {
        arreglo.push(i);
    }
    
}

for (let i = 0; i < arreglo.length; i++) 
{
    console.log(arreglo[i]);
}