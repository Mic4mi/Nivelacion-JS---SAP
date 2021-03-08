/*
Ejercicio 7.
Crear un script que genere un numero al azar entre 0 y 2, debe utilizar 
Promise para procesar el resultado: un error si el numero generado es 
0 y un mensaje de ejecución correcta en caso contrario.
*/

let azar = function () {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 0)
        throw new Error("Que mal, se ha sacado 0");
    return "Se ha ejecutado correctamente.";
}

function ejecutar() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                resolve({ mensaje: azar() });
            } catch (err) {
                reject(err);
            }
        }, 1000);
    })
}

ejecutar()
    .then(console.log)
    .catch(console.log);
