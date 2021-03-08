/*
Definir una función que muestre información sobre una cadena de texto
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
*/

let informacionDeCadena = (cadena) => {
    let respuesta;
    let contadorMin = 0;
    let contadorMay = 0;

    for (let i = 0; i < cadena.length; i++) {
        
        if (cadena[i] === ' ') {
            continue;
        }
        else if (cadena[i] === cadena[i].toLowerCase()) {
            contadorMin++;
        } else {
            contadorMay++;
        }
    }

    if (contadorMay == 0) {
        respuesta = "La cadena esta formada sólo por minusculas."
    } else if (contadorMin == 0) {
        respuesta = "La cadena esta formada sólo por mayúsculas."
    } else {
        respuesta = "La cadena es mixta."
    }

    return respuesta;
}

const isNumber = (n) => {
    return(n >= '0' && n >= 9);
}