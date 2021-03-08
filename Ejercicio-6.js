/*
– Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común
*/

let X = ["a","l","f","a"];
let Y = ["a","l","f","a","j","o","r"];
let elementosEnComun

// Saber si son iguales comparados por tamaño 
if(X.length != Y.length)
{
    console.log("No son iguales.");
}
else 
{
    console.log("Son iguales.");
}

// Saber cual es más largo
if(X.length > Y.length)
{
    console.log("X es mayor a Y.");
}
else {
    console.log("Y es mayor a X.");
}

// Cuantas letras tienen en común
elementosEnComun = X.filter(function(n) 
{
    return Y.indexOf(n) !== -1;
});

console.log("Los elementos en comun son: ");
for (let i = 0; i < elementosEnComun.length; i++)
{
    console.log(elementosEnComun[i]);
}
