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
    this.calcularEdad = function calcularEdad() {
        var cumpleanos = +new Date(this.cumpleanios);
        return Math.floor(((Date.now() - cumpleanos) / (31557600000)));
    }
}

