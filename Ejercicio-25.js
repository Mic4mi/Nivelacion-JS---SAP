const APROBADOS = [];
const DESAPROBADOS = [];

let form = document.getElementById("registro"),
    nombre = document.getElementById("nombre"),
    DNI = document.getElementById("dni"),
    dia = document.getElementById("dia"),
    mes = document.getElementById("mes"),
    anio = document.getElementById("anio"),
    telefono = document.getElementById("telefono"),
    email = document.getElementById("email"),
    curso = document.getElementById("curso"),
    legajo = document.getElementById("legajo");


// Validaciones
email.addEventListener('blur', (event) => esEmailValido(event.target.value));
dia.addEventListener('blur', (event) => esDiaValido(event.target.value));
mes.addEventListener('blur', (event) => esMesValido(event.target.value));
anio.addEventListener('blur', (event) => esAnioValido(event.target.value));
telefono.addEventListener('blur', (event) => esTelefonoValido(event.target.value));
form.addEventListener('submit', (event) => onSubmit(event, generarFechaString(dia.value, mes.value, anio.value)));

// Declaración de funciones

function generarFechaString(dia, mes, anio) {
    return mes + "/" + dia + "/" + anio;
}

function onSubmit(event, fecha) {
    let edadUsuario = calcularEdad(fecha);
    let esMayor = esMayorDeEdad(edadUsuario);
    let emailValido = esEmailValido(email.value);
    let telefonoValido = esTelefonoValido(telefono.value);
    let legajoGenerado = generarLegajo(curso.value, DNI.value);
    let sonLegajosIguales = compararLegajos(legajo.value, legajoGenerado);

    if (!emailValido || !esMayor || !telefonoValido || !sonLegajosIguales) {
        event.preventDefault();
    }
}

function compararLegajos(legajoIngresado, legajoGenerado) {
    if (legajoGenerado.toUpperCase() === legajoIngresado.toUpperCase()) {
        return true;
    }
    alert("Legajo invalido")
    return false;
}

function generarLegajo(curso, dni) {
    return 'A' + curso + dni + 2021;
}

function esTelefonoValido(telefono) {
    if (telefono < 100000000 || telefono > 999999999) {
        alert("Valor TELEFONO incorrecto");
        return false;
    }
    return true;
}

function esDiaValido(dia) {
    if (dia < 1 || dia > 31 || isNaN(dia)) {
        alert("Valor DIA incorrecto");
        return false;
    }
    return true;
}

function esMesValido(mes) {
    if (mes < 1 || mes > 12 || isNaN(mes)) {
        alert("Valor MES incorrecto");
        return false;
    }
    return true;
}

function esAnioValido(anio) {
    if (anio < 1900 || anio > 2020 || isNaN(anio)) {
        alert("Valor AÑO incorrecto");
        return false;
    }
    return true;
}

function calcularEdad(fechaString) {
    var cumpleanos = +new Date(fechaString);
    return Math.floor(((Date.now() - cumpleanos) / (31557600000)));
}

function esMayorDeEdad(edad) {
    if (edad < 18) {
        alert("Debes tener más de 18 años para poder enviar la solicitud.");
        return false;
    }
    return true;
}

function esObligatorio(valor) {
    if (valor === '') {
        //alert("El campo no puede estar vacio");
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

function Alumno(nombre, dni, dia, mes, anio, telefono, email, curso, legajo) {
    this.nombre = nombre;
    this.dni = dni;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.telefono = telefono;
    this.email = email;
    this.curso = curso;
    this.legajo = legajo;
    this.cumpleanios = this.mes + "/" + this.dia + "/" + this.anio;
}

function obtenerCalificacionFinal(quimica, matematica, cienciasSociales, física, historia, biologia, informatica, idiomas) {

}