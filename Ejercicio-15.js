/*
Ejercicio 4.
Supongamos que se desea invertir una cantidad X de pesos en un sistema 
de ahorro que otorga el 33.5% Anual de interés efectivo, realice un 
programa que informe ¿cuál es el interés en pesos que se va a ganar 
por mes? y ¿cuál es el total que debe recibirse por 3 meses?
*/

ejecutarCalculo();

function ejecutarCalculo() {
    let inversion = parseInt(prompt("Ingrese el monto de inversión."))
    let interesMensual = calcularInteres(inversion, 33.5, 30);
    let interesTrimestral = calcularInteres(inversion, 33.5, 90);

    console.log(`Interés en pesos generado por mes: $${interesMensual}`);
    console.log(`Interés en pesos trimestral: $${interesTrimestral}`);
}


function calcularInteres(capital, razon, tiempo) {
    return ((capital * razon * tiempo) / (365 * 100)).toFixed(2);
}