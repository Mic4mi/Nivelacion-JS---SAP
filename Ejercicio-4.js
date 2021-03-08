/*Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su
posición.*/

let x = [10,24,36,7,98,11,14,20];
let maximo = x[0];
let maxPos = 0;

for (let i = 0; i < x.length; i++) 
{
    if(x[i] > maximo)
    {
        maximo = x[i];
        maxPos = i;
    }
}

console.log(maximo);
console.log(maxPos);