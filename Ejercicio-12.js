/*
Ejercicio 1.
Simular lanzamiento de un dado, si el valor es menor a 3 mostrar mensaje
A sino mostrar un mensaje B. El mensaje se debe insertar desde .js al 
elemento body del DOM.

*/

var arrojarDado = function () {
    var randomNumber = 1 + Math.floor(Math.random() * 6);
    if(randomNumber < 3)
        throw new Error(document.write("<br>Has sacado menos que 3</br>"));
    return document.write("<br>Has sacado más que 3!!!</br>");
}

new Promise(function(resolve, reject) {
    setTimeout(function() {
        try {
            var resultado = arrojarDado();
            resolve(resultado);
        } catch (err) {
            reject(err);
        }
    }, 1000);
})
.catch(console.log)
.then(console.log);