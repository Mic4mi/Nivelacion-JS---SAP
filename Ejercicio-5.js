/*Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
*/

let x = [10,24,36,7,98,11,14,20,98,14,10];
let maximo = x[0];
let repeticiones = 0;

for (let i = 0; i < x.length; i++) 
{
    if(x[i] > maximo)
    {
        maximo = x[i];
    }
}

for (let i = 0; i < x.length; i++)
{
    if(x[i] == maximo)
    {
        repeticiones++;
    }
}

console.log(maximo);
console.log(repeticiones);
