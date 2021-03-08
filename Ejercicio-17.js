/*
Ejercicio 6.
Construir un validador para un formulario de registro que, dado el HTML 
que se proporciona, valide cada uno de los campos cuando el usuario 
ha terminado de introducir datos en cada uno de ellos, es decir, al perder 
el foco. Si el campo no cumple las restricciones, se mostrará una alerta 
al usuario, pero se le permitirá seguir introduciendo datos en el resto 
de campos.
En el momento en el que el usuario envíe el formulario (evento submit), 
se validarán todos los campos y el formulario no se enviará si alguno de 
los campos no es válido. Las restricciones a cumplir son las siguientes:
•	El nombre, email y comentarios son campos obligatorios.
•	El campo email debe ser una dirección de email válida.
•	El texto introducido en el campo de comentarios no debe exceder los 
    50 caracteres.
•	El password debe tener una longitud mínima de 6 caracteres, y contener
     al menos una letra minúscula, una letra mayúscula y un dígito.

*/

let form = document.getElementById("registro");
let nombre = document.getElementById("registro_nombre");
let apellido = document.getElementById("registro_apellido");
let email = document.getElementById("registro_email");
let password = document.getElementById("registro_password");
let comentarios = document.getElementById("registro_comentarios");

nombre.addEventListener('blur', (event) => esObligatorio(event.target.value));
email.addEventListener('blur', (event) => esObligatorio(event.target.value));
email.addEventListener('blur', (event) => esEmailValido(event.target.value));
comentarios.addEventListener('blur', (event) => esObligatorio(event.target.value));
comentarios.addEventListener('blur', (event) => esComentarioValido(event.target.value));
password.addEventListener('blur', (event) => esPasswordValida(event.target.value));
form.addEventListener('submit', sonCamposValidos);

function sonCamposValidos(event) {
    let nombreValido = esObligatorio(nombre.value);
    let emailValido = esObligatorio(email.value) && esEmailValido(email.value);
    let comentariosValidos = esObligatorio(comentarios.value) && esComentarioValido(comentarios.value);
    let passValida = esPasswordValida(password.value);

    if (!nombreValido || !emailValido || !comentariosValidos || !passValida) {
        event.preventDefault();
    }
}

function esObligatorio(valor) {
    if (valor === '') {
        alert("El campo no puede estar vacio");
        return false;
    }
    return true;
}

function esEmailValido(email) {
    if (email === '' || email.length > 50) {
        return false;
    } else if (!esFormatoEmailValido(email)) {
        alert("La dirección de email es incorrecta.");
        return false;
    }
    return true;
}

function esFormatoEmailValido(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

function esComentarioValido(comentario) {
    if (comentario.length > 50) {
        alert("La longitud supera los 50 caracteres");
        return false;
    }
    return true;
}

function esPasswordValida(pass) {
    if (pass.length < 6) {
        alert('El Password debe tener una longitud mínima de 6 caracteres');
        return false;
    }

    let mayus = false;
    let minus = false;
    let numero = false;

    for (let i = 0; i < pass.length; i++) {

        if (mayus && minus && numero) {
            return true;
        }

        if (!isNaN(pass[i])) {
            numero = true;
        } else if (pass[i] === pass[i].toLowerCase()) {
            minus = true;
        } else if (pass[i] === pass[i].toUpperCase()) {
            mayus = true;
        }
    }

    if (!(mayus && minus && numero)) {
        alert('El Password debe tener al menos una letra minúscula, una letra mayúscula y un dígito.');
        return false;
    }
}