fetch("https://www.lanacion.com.ar/").then(func1).catch(err);

function func1(val) {
    console.log(val);
}

function err(val) {
    console.log(val);
}

const valores = [];

function ejecutar() {
    return new Promise(function (resolve, reject) {
        let valor = prompt("Ingrese un valor");

        if (valor == "") {
            reject({
                mensajeError: 'No se ha cargado un valor.'
            });
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    valores.push(valor);
                    resolve({
                        mensaje: `El valor ${valor} se ha cargado correctamente.`,
                        valores: valores
                    });
                }, 5000);

            });
        }
    });
}

ejecutar()
    .then(console.log)
    .catch(console.log);