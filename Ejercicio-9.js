/*A partir del siguiente array que se proporciona: 
var valores = [true, 5, false, "hola", "adios", 2];
Determinar cual de los dos elementos de texto es mayor
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos */


var valores = [true, 5, false, "hola", "adios", 2]

//Que texto es mayor
cualTextoEsMayor(valores[3], valores[4]);


//suma, resta, multiplicacion, división 
sumar(valores[1], valores[5]);

restar(valores[1], valores[5]);

multiplicar(valores[1], valores[5]);

dividir(valores[1], valores[5]);


let cualTextoEsMayor = (texto1, texto2) => {
    let respuesta;
    if (texto1.length > texto2.length) {
        respuesta = `${texto1} es mayor a ${texto2}`;
    }
    else if (texto1.length == texto2.length){
        respuesta = `${texto1} tiene la misma logitud que ${texto2}`;
    }
    else {
        respuesta = `${texto2} es mayor a ${texto1}`;
    }
    
    return respuesta;
}

let sumar = (a, b) => a + b;

let restar = (a, b) => a - b;

let multiplicar = (a, b) => a * b;

let dividir = (a, b) => {
    let resultado;
    if (b == 0) {
        resultado = "no se puede dividir por cero";
    }
    else {
        resultado = a / b;
    }
    return resultado;
}