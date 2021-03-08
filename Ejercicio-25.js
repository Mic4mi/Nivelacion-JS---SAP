const APROBADOS = [],
    DESAPROBADOS = [],
    GENERAL = [];
let form = document.getElementById("registro"),
    nombre = document.getElementById("nombre"),
    DNI = document.getElementById("dni"),
    dia = document.getElementById("dia"),
    mes = document.getElementById("mes"),
    anio = document.getElementById("anio"),
    telefono = document.getElementById("telefono"),
    email = document.getElementById("email"),
    curso = document.getElementById("curso"),
    legajo = document.getElementById("legajo"),
    quimica = document.getElementById("quimica"),
    matematica = document.getElementById("matematica"),
    cienciasSociales = document.getElementById("cienciasSoc"),
    fisica = document.getElementById("fisica"),
    historia = document.getElementById("historia"),
    biologia = document.getElementById("biologia"),
    informatica = document.getElementById("informatica"),
    idiomas = document.getElementById("idiomas"),
    selectValueBusqueda = document.getElementById("buscarPor"),
    respuestaBusqueda = document.getElementById("resultadoBusqueda"),
    selectValueLista = document.getElementById("filtrarPor"),
    respuestaLista = document.getElementById("resultadoLista"),
    btnsVolver = document.getElementsByClassName("volverAlform");


// Validaciones
email.addEventListener('blur', (event) => esEmailValido(event.target.value));
dia.addEventListener('blur', (event) => esDiaValido(event.target.value));
mes.addEventListener('blur', (event) => esMesValido(event.target.value));
anio.addEventListener('blur', (event) => esAnioValido(event.target.value));
telefono.addEventListener('blur', (event) => esTelefonoValido(event.target.value));
form.addEventListener('submit', (event) => onSubmit(event, generarFechaString(dia.value, mes.value, anio.value)));

for (let i = 0; i < btnsVolver.length; i++) {
    btnsVolver[i].addEventListener('click', btnVolver);
}

// Declaración de funciones

function btnBuscar() {
    document.getElementById("formularioDeRegistro").style.display = "none";
    document.getElementById("listar").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("btnOpciones").style.display = "none";
}

function btnListar() {
    document.getElementById("formularioDeRegistro").style.display = "none";
    document.getElementById("listar").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("btnOpciones").style.display = "none";
}

function btnVolver() {
    document.getElementById("formularioDeRegistro").style.display = "block";
    document.getElementById("listar").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("btnOpciones").style.display = "block";
}

function ejecutarListado() {

    if (GENERAL.length === 0) {
        alert("No hay alumnos en el sistema")
        return;
    }

    respuestaLista.value = '';

    switch (selectValueLista.value) {
        case "aprobados":
            if (APROBADOS.length === 0) {
                respuestaLista.value = 'No existen alumnos aprobados aun.';
            }
            listarAlumnos(APROBADOS, respuestaLista);
            break;
        case "desaprobados":
            if (DESAPROBADOS.length === 0) {
                respuestaLista.value = 'No existen alumnos desaprobados aun.';
            }
            listarAlumnos(DESAPROBADOS, respuestaLista);
            break;
        case "todos":
            listarAlumnos(GENERAL, respuestaLista);
            break;
    }
}

function ejecutarBusqueda() {

    if (GENERAL.length === 0) {
        alert("No hay alumnos en el sistema")
        return;
    }

    respuestaBusqueda.value = '';

    switch (selectValueBusqueda.value) {
        case "DNI":
            respuestaBusqueda.value = '';
            let dniUsuario = parseInt(prompt("Ingrese DNI"));
            let dniExiste = buscarPorDNI(dniUsuario, GENERAL);
            if (!dniExiste) {
                respuestaBusqueda.value = "No existe alumno con ese DNI.";
            }
            break;
        case "nombre":
            let nombreUsuario = prompt("Ingrese nombre");
            let nombreExiste = buscarPorNombre(nombreUsuario, GENERAL);
            if (!nombreExiste) {
                respuestaBusqueda.value = "No existe alumno con ese nombre.";
            }
            break;
        case "celular":
            let telefonoUsuario = parseInt(prompt("Ingrese telefono."));
            let telefonoExiste = buscarPorCelular(telefonoUsuario, GENERAL);
            if (!telefonoExiste) {
                respuestaBusqueda.value = "No existe alumno con ese teléfono.";
            }
            break;
        case "email":
            let emailUsuario = prompt("Ingrese el correo electrónico.");
            let emailExiste = buscarPorEmail(emailUsuario, GENERAL);
            if (!emailExiste) {
                respuestaBusqueda.value = "No existe alumno con ese correo electrónico.";
            }
            break;
    }
}

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
    let calificacion = obtenerCalificacionFinal();
    let alumno;

    if (emailValido && esMayor && telefonoValido && sonLegajosIguales) {
        alumno = new Alumno(nombre.value, DNI.value, dia.value, mes.value, anio.value, telefono.value, email.value, curso.value, legajo.value, calificacion);

        GENERAL.push(alumno);

        if (alumno.calificacionFinal >= 100) {
            APROBADOS.push(alumno);
        } else {
            DESAPROBADOS.push(alumno);
        }

        alert("Inscripcion exitosa");
        limpiarFormulario(form);
    }
    event.preventDefault();
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

function obtenerCalificacionFinal() {
    let porcentaje = 0;
    if (quimica.value >= 5) {
        porcentaje += 10;
    }
    if (matematica.value >= 5) {
        porcentaje += 20;
    }
    if (cienciasSociales.value >= 5) {
        porcentaje += 5;
    }
    if (fisica.value >= 5) {
        porcentaje += 10;
    }
    if (historia.value >= 5) {
        porcentaje += 5;
    }
    if (biologia.value >= 5) {
        porcentaje += 20;
    }
    if (informatica.value >= 5) {
        porcentaje += 30;
    }
    if (idiomas.value >= 5) {
        porcentaje += 30;
    }

    return porcentaje;
}

function limpiarFormulario(formulario) {
    formulario.reset();
}

function listarAlumno(alumno) {
    return `_Alumno_\nLegajo: ${alumno.legajo}\nCurso ${alumno.curso}\nDNI: ${alumno.dni}\nNombre: ${alumno.nombre}\nFecha de nacimiento: ${alumno.cumpleanios}\nTelefono: ${alumno.telefono}\nEmail: ${alumno.email}\nCalificacion: ${alumno.calificacionFinal}%\nObservaciones: ${alumno.mensajeDePromocion()}\n`;
}

function listarAlumnos(alumnos, textArea) {
    for (let i = 0; i < alumnos.length; i++) {
        textArea.value += listarAlumno(alumnos[i]);
    }
}

function buscarPorDNI(dni, listaA) {
    for (let i = 0; i < listaA.length; i++) {
        if (dni == listaA[i].dni) {
            respuestaBusqueda.value = listarAlumno(listaA[i]);
            return true;
        }
    }
    return false;
}

function buscarPorNombre(nombre, listaA) {
    for (let i = 0; i < listaA.length; i++) {
        if (nombre.toLowerCase() === listaA[i].nombre.toLowerCase()) {
            respuestaBusqueda.value = listarAlumno(listaA[i]);
            return true;
        }
    }
    return false;
}

function buscarPorEmail(email, listaA) {
    for (let i = 0; i < listaA.length; i++) {
        if (email.toLowerCase() === listaA[i].email.toLowerCase()) {
            respuestaBusqueda.value = listarAlumno(listaA[i]);
            return true;
        }
    }
    return false;
}

function buscarPorCelular(celular, listaA) {
    for (let i = 0; i < listaA.length; i++) {
        if (celular == listaA[i].telefono) {
            respuestaBusqueda.value = listarAlumno(listaA[i]);
            return true;
        }
    }
    return false;
}

function Alumno(nombre, dni, dia, mes, anio, telefono, email, curso, legajo, calificacionFinal) {
    this.nombre = nombre;
    this.dni = dni;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.telefono = telefono;
    this.email = email;
    this.curso = curso;
    this.legajo = legajo;
    this.calificacionFinal = calificacionFinal;
    this.cumpleanios = this.mes + "/" + this.dia + "/" + this.anio;
    this.mensajeDePromocion = function () {
        if (this.calificacionFinal >= 100) {
            return "Alumno promueve exitosamente, pasó de año.";
        } else {
            return "Alumno no alcanza lo suficiente para poder promover, no pasa de año";
        }
    }
}