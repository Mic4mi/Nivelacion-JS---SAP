/*Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por
pantalla el valor máximo.*/

let x = [10,24,36,7,98,11,14,20];
let maximo = x[0];

for (let i = 0; i < x.length; i++) 
{
    if(x[i] > maximo)
    {
        maximo = x[i];
    }
}

console.log(maximo);