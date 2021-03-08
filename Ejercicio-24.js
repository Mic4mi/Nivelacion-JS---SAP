// Ejercicio 24
const dominio = "Supermercado la Farola"
const CODIGO = 12345;
let promos = [new Producto(1, "Mermelada", "Mermelada de frambuesa marca LA TIA ROSA", 0, 35), new Producto(2, "Pan", "Pan lactal marca BIMBO, 12 rebanadas", 0, 50)];

alert(`${dominio}:\n¡Hola, bienvenido a nuestra plataforma de e-commerce!`);
let nombreCliente = pedirNombre();
let correoElectronico = pedirEmail();
let dni = pedirDNI();
let fechaDeNacimiento = pedirFechaNacimiento();

mostrarProductos(promos);
for (let i = 0; i < promos.length; i++) {
    const element = promos[i];
    comprarArticulo(promos, promos[i], promos[i].id);
}

//Totales primarios
let total = calcularTotal(promos);
mostrarSubtotales(promos);
alert(`Total x compra final $${total}`);

//Totales con descuento
let descuento;
let confirmacion = confirm("¿Desea agregar un cupón de descuento?");
if (confirmacion) {
    descuento = validarCodigo(CODIGO);

    if (descuento) {
        total = total - (total * 0.25);
        alert(`Total x compra final con descuento del 25% $${total}`);
    }
}

//Verificar si abona con tarjeta
let cuotas = 1;
let pagos = 0;
let abonaCredito = confirm("¿Desea abonar con tarjeta de credito?");
if (abonaCredito) {
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas, maximo 6."));
    while (isNaN(cuotas) || cuotas < 1 || cuotas > 6) {
        cuotas = parseInt(prompt("Dato invalido. Ingrese la cantidad de cuotas, máximo 6."));
    }
    pagos = total / cuotas;
    alert(`Abona en ${cuotas} pagos sin interés de $${pagos}`);
} else {
    alert(`Abona en un solo pago de $${total}`);
}

imprimirDetalle(promos, descuento, abonaCredito, cuotas, pagos);

alert(`Gracias por haber pasado por nuestro sitio ${nombreCliente}, hasta luego.`);

// Declaracion de Funciones

function imprimirDetalle(productos, desc, confirmacionCred, cuotas, pagos) {
    let total = calcularTotal(productos);
    alert("Vera el resumen de su compra en la consola.");
    console.log("Detalle de compra\nSubtotales: ");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i].nombre}: $${productos[i].subtotal()}\n`);
    }
    console.log(`Total: $${total}\n`);

    if (desc) {
        total = total - (total * 0.25);
        console.log(`Tiene un descuento del 25%, abonando un total de $${total}`);
    }

    if (confirmacionCred) {
        console.log(`Abona en ${cuotas} pagos sin interés de $${pagos}`);
    } else {
        console.log(`Abona en efectivo un total de $${total}`);
    }
}

function validarCodigo(codigo) {
    let intento = parseInt(prompt("Ingrese el codigo de descuento"));

    if (codigo === intento) {
        alert("Felicitaciones, tienes un codigo de descuento del 25%");
        return true;
    } else {
        alert("Cupón expirado o inválido");
        return false;
    }
}

function mostrarSubtotales(productos) {
    for (let i = 0; i < productos.length; i++) {
        alert(`Subtotal x ${productos[i].nombre} = $${productos[i].subtotal()}`);
    }
}

function calcularTotal(productos) {
    let acumTotal = 0;
    for (let i = 0; i < productos.length; i++) {
        acumTotal += productos[i].subtotal();
    }
    return acumTotal;
}

function comprarArticulo(articulos, articulo, id) {
    let deseaComprar = confirm(`¿Desea comprar el articulo ${articulo.nombre}?`);
    let cantidad;

    if (!deseaComprar) {
        return false;
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de unidades a comprar"));
    while (cantidad < 1 || isNaN(cantidad)) {
        cantidad = parseInt(prompt("Dato invalido. Ingrese la cantidad de unidades a comprar"));
    }

    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].id === id) {
            articulos[i].unidades = cantidad;
            return true;
        }
    }
}

function pedirFechaNacimiento() {
    let dia = pedirDia();
    let mes = pedirMes();
    let anio = pedirAnio();
    let fecha = mes + "/" + dia + "/" + anio;
    let edad = calcularEdad(fecha);

    while (edad < 18) {
        alert("Debe ser mayor de 18 años para poder continuar.");
        dia = pedirDia();
        mes = pedirMes();
        anio = pedirAnio();
        fecha = mes + "/" + dia + "/" + anio;
        edad = calcularEdad(fecha);
    }
    return fecha;
}

function pedirDia() {
    let dia = parseInt(prompt("Ingrese su día de nacimiento"));
    while (dia < 1 || dia > 31 || isNaN(dia)) {
        dia = parseInt(prompt("Dato inválido. Ingrese su día de nacimiento"));
    }
    return dia;
}

function pedirMes() {
    let mes = parseInt(prompt("Ingrese su mes de nacimiento"));
    while (mes < 1 || mes > 12 || isNaN(mes)) {
        mes = parseInt(prompt("Dato inválido. Ingrese su mes de nacimiento"));
    }
    return mes;
}

function pedirAnio() {
    let anio = parseInt(prompt("Ingrese su año de nacimiento"));
    while (anio < 1900 || anio > 2020 || isNaN(anio)) {
        anio = parseInt(prompt("Dato inválido. Ingrese su año de nacimiento"));
    }
    return anio;
}

function pedirNombre() {
    let nombre = prompt("Ingrese su nombre");
    let validar = esNombreValido(nombre);

    while (!validar) {
        nombre = prompt("Ingrese su nombre");
        validar = esNombreValido(nombre);
    }
    return nombre;
}

function pedirDNI() {
    let dni = parseInt(prompt("Ingrese su DNI: "));
    while (isNaN(dni) || dni < 10000000 || dni > 99999999) {
        dni = parseInt(prompt("Dato invalido. Ingrese su DNI: "));
    }
    return dni;
}

function pedirEmail() {
    let email = prompt("Ingrese su email");
    let validar = esEmailValido(email);

    while (!validar) {
        email = prompt("Ingrese su email");
        validar = esEmailValido(email);
    }
}

function esFormatoEmailValido(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

function esEmailValido(email) {
    if (!esFormatoEmailValido(email)) {
        alert("La dirección de email es incorrecta.");
        return false;
    }
    return true;
}

function esNombreValido(nombre) {
    if (nombre.length > 30) {
        alert("El nombre no puede superar los 30 caracteres.");
        return false;
    }
    return true;
}

function calcularEdad(fechaString) {
    var cumpleanos = +new Date(fechaString);
    return Math.floor(((Date.now() - cumpleanos) / (31557600000)));
}

function Producto(id, nombre, descripcion, unidades, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.unidades = unidades;
    this.precio = precio;
    this.subtotal = function () {
        return this.unidades * this.precio;
    }
}

function mostrarProducto(producto) {
    alert(`Nuestros productos en promoción:\n\nProducto ${producto.id}\nNombre: ${producto.nombre}\nDescripción: ${producto.descripcion}\nPrecio x unidad: $${producto.precio}\n\n`);
}

function mostrarProductos(productos) {
    for (let i = 0; i < productos.length; i++) {
        mostrarProducto(productos[i]);
    }
}
