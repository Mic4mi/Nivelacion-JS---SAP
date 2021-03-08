/*
Ejercicio 8.
Crear un script que permita el ingreso de valores para cargar un
array y espere 3 segundos por cada carga, debe utilizar Promise 
para procesar el resultado: error si no se cargó un valor en el 
array y un mensaje de ejecución correcta junto con los valores 
del array en caso contrario.

pasar valores que se van introduciendo en el array

*/

const INTERVALO = 3000;
const valores = [];

function ejecutar() {
    return new Promise(function (resolve, reject) {
        let valor = prompt('Ingrese un valor');

        if (valor) {
            valores.push(valor);
            resolve({
                mensaje: `El valor ${valor} se ha cargado correctamente.`,
                valores: valores
            });
        } else {
            reject({
                mensajeError: 'No se ha cargado un valor.'
            });
        }
    });
}

setTimeout(() => {
    ejecutar()
        .then(console.log)
        .catch(console.log)
}, INTERVALO);