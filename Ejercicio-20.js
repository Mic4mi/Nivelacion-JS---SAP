/*
Replicar el ejercicio 8 pero usando async/await para su solución.
*/

const INTERVALO = 7000;
const valores = [];

const ejecutar = async () => {
    let valor = prompt('Ingrese un valor');

    if (valor) {
        valores.push(valor);
        return {
            mensaje: `El valor ${ valor } se ha cargado correctamente.`,
            valores: valores
    };
} else {
    throw new Error('No se ha cargado un valor.');
    }
};

setInterval(async () => {
    try {
        let result = await ejecutar();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}, INTERVALO);