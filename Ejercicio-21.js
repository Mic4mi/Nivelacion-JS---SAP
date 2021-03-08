/*
El cliente tiene una empresa de pastelería y quiere contar con una herramienta para mandar saludos. 
Dependiendo de la empresa que le compra al cliente, él les manda una carta de agradecimiento; sin 
embargo, hay empresas que son muy formales y otras donde la formalidad está visto como algo obsoleto. 
Entonces necesita saber, teniendo el nombre de la empresa,qué frase tiene que utilizar.
Requerimientos

*Hacer un programa que tenga precargados hasta 3 nombres y saludos de empresas y en base 
a un nombre que ingrese el usuario, elija el saludo correspondiente y lo devuelva por el 
navegador.
	
*En el caso de que el usuario ingrese el nombre de una empresa que no exista, se debe 
pedir una confirmación para verificar si ese nombre realmente existe o no. Si el nombre 
es correcto, se debe devolver un saludo genérico, y en caso de que sea incorrecto, volver 
a pedirlo.	


Tips
-Para preguntar al usuario una pregunta de sí o no, como en una confirmación, podemos 
utilizar confirm() que activa una ventana en el navegador con las opciones "Aceptar" 
o "Cancelar".Cuando el usuario responde, confirm() devolverá un booleano con el valor 
correspondiente: false si respondió cancelar y true si se aceptó la pregunta.Toma 
como primer parámetro la pregunta que queremos hacer al usuario.

Ejemplo
let userConfirm = confirm("Are you sure?");
console.log(userConfirm);
*/

let empresas = [new Empresa("Accenture", "Saludos Cordiales."), new Empresa("Banco Santander", "Les mando un abrazo"), new Empresa("IBM", "Saludos")];
let confirmacionUsuario = false;

while (!confirmacionUsuario) {
    let nombreEmpresa = prompt("Ingrese el nombre de la Empresa");
    let siExiste = empresaExiste(empresas, nombreEmpresa);

    if (siExiste) {
        ejecutarSaludo(nombreEmpresa, empresas);
        confirmacionUsuario = true;
    } else {
        confirmacionUsuario = confirm("Este nombre no existe en la lista, esta seguro de que es correcto?");
        if (confirmacionUsuario) {
            console.log("Chau chau");
            confirmacionUsuario = true;
        }
    }
}


function ejecutarSaludo(nombre, empresas) {
    for (let i = 0; i < empresas.length; i++) {
        if (empresas[i].name.toLowerCase() === nombre.toLowerCase()) {
            empresas[i].sayhi();
        }
    }
}

function empresaExiste(empresas, nombre) {
    for (let i = 0; i < empresas.length; i++) {
        if ((empresas[i].name).toLowerCase() === nombre.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function Empresa(name, greetings) {
    this.name = name;
    this.greetings = greetings;
    this.sayhi = function () {
        console.log(this.greetings);
    }
}