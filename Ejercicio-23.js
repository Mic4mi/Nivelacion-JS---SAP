//Programa
const personas = [new Persona(0, "Carla", 1545628984, "carla@gmail.com"), new Persona(1, "Pedro", 1545251245, "pedro@gmail.com"), new Persona(2, "Lucas", 1523357849, "lucas@gmail.com"), new Persona(3, "Ana", 15789456, "ana@gmail.com"),];
let respuesta = false;
let opcion;

do {
    opcion = obtenerOpcion(1, 3, "Opciones:\n1. Buscar 1 usuario\n2. Listar todos los usuarios\n3. Salir");

    switch (opcion) {
        case 1:
            buscar(personas);
            break;
        case 2:
            listarPersonas(personas);
            break;
        case 3:
            respuesta = confirm("¿Confirma salida?");
            if (respuesta) {
                alert("¡Hasta la próxima!\n\nSaliendo...");
            }
            break;
    }

} while (!respuesta);


//Funciones

function buscar(lista) {
    let confirmacion = false;

    do {
        let opcion = obtenerOpcion(1, 5, "Buscar por:\n1. ID\n2. Nombre\n3. Celular\n4. E-mail\n5. Volver al menu principal");

        switch (opcion) {
            case 1:
                let idIngresado = parseInt(prompt("Ingrese ID a buscar"));
                let buscarId = buscarPorID(idIngresado, lista);
                if (!buscarId) {
                    alert("No se encontraron personas con ese ID.");
                }
                break;
            case 2:
                let nombreIngresado = prompt("Ingrese nombre a buscar");
                let buscarNombre = buscarPorNombre(nombreIngresado, lista);
                if (!buscarNombre) {
                    alert("No se encontraron personas con ese nombre.");
                }
                break;
            case 3:
                let celularIngresado = parseInt(prompt("Ingrese el teléfono a buscar"));
                let buscarCelular = buscarPorCelular(celularIngresado, lista);
                if (!buscarCelular) {
                    alert("No se encontraron personas con ese celular.");
                }
                break;
            case 4:
                let emailIngresado = prompt("Ingrese el email a buscar");
                let buscarEmail = buscarPorEmail(emailIngresado, lista);
                if (!buscarEmail) {
                    alert("No se encontraron personas con ese email.");
                }
                break;
            case 5:
                confirmacion = confirm("¿Confirma salida?");
                if (confirmacion) {
                    alert("Volviendo al menu principal...");
                }
                break;
        }
    } while (!confirmacion);
}

function obtenerOpcion(min, max, mensaje) {
    alert(mensaje);
    let opcion = parseInt(prompt("Ingrese una opcion:"));
    while (opcion < min || opcion > max || isNaN(opcion)) {
        opcion = parseInt(prompt("Invalido. Ingrese una opcion:"));
    }
    return opcion;
}

function listarPersona(persona) {
    alert(`Persona ${persona.id}\nNombre: ${persona.nombre}\nTeléfono: ${persona.telefono}\nEmail: ${persona.email}\n\n`);
}


function listarPersonas(listaP) {
    for (let i = 0; i < listaP.length; i++) {
        listarPersona(listaP[i]);
    }
}

function buscarPorID(id, listaP) {
    for (let i = 0; i < listaP.length; i++) {
        if (id === listaP[i].id) {
            listarPersona(listaP[i]);
            return true;
        }
    }
    return false;
}

function buscarPorNombre(nombre, listaP) {
    for (let i = 0; i < listaP.length; i++) {
        if (nombre.toLowerCase() === listaP[i].nombre.toLowerCase()) {
            listarPersona(listaP[i]);
            return true;
        }
    }
    return false;
}

function buscarPorEmail(email, listaP) {
    for (let i = 0; i < listaP.length; i++) {
        if (email.toLowerCase() === listaP[i].email.toLowerCase()) {
            listarPersona(listaP[i]);
            return true;
        }
    }
    return false;
}

function buscarPorCelular(celular, listaP) {
    for (let i = 0; i < listaP.length; i++) {
        if (celular == listaP[i].telefono) {
            listarPersona(listaP[i]);
            return true;
        }
    }
    return false;
}

function Persona(id, nombre, telefono, email) {
    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
}