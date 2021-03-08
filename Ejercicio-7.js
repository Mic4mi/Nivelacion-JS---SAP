/*
Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 =
[“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?
*/

let datos1 = ["Fido", "Gomez", 26, 15000.78, true];
let datos2 = ["Gervasio", "Fernandez", 32, 28550, false];
let sueldoFido;

// Punto a
cualEsMayor(datos1[2], datos1[0], datos2[2], datos2[0]);

//Punto b
estaCasado(datos1[0], datos1[4]);
estaCasado(datos2[0], datos2[4]);

// Punto c
sueldoFido = calcularAumento(datos2[3], datos1[3]);
console.log(`${datos1[0]} cobraría $${sueldoFido}.`);


/*function cualEsMayor(edad1, nombre1, edad2, nombre2) {
    if (edad1 > edad2) {
        console.log(`${nombre1} es mayor que ${nombre2}`);
    }
    else {
        console.log(`${nombre2} es mayor que ${nombre1}`);
    }
}*/

let cualEsMayor = (edad1, nombre1, edad2, nombre2) => {
    let respuesta;
    if (edad1 > edad2) {
         respuesta = `${nombre1} es mayor que ${nombre2}`;
    }
    else {
        respuesta = `${nombre2} es mayor que ${nombre1}`;
    }
}

/*function estaCasado(nombre, estadoCivil) {
    if (estadoCivil == true) {
        console.log(`${nombre} esta casado.`);
    }
    else {
        console.log(`${nombre} esta soltero.`);
    }
}*/

let estaCasado = (nombre, estadoCivil) => {
    let respuesta;
    if (estadoCivil == true) {
      respuesta = `${nombre} esta casado.`;
    }
    else {
        respuesta = `${nombre} esta soltero.`;
    }
    return respuesta;
}



/*function calcularAumento(sueldoBase, sueldoFinal) {
    let aumento = sueldoBase * 0.125;

    return sueldoFinal + aumento;
}*/

let calcularAumento = (sueldoBase, sueldoFinal) => {
    let aumento = sueldoBase * 0.125;
    return sueldoFinal + aumento;
}
