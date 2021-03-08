/*
Realizar la lógica para una web de venta de coches: Si el coche a la venta 
es un Ford Fiesta (Código: 11450 Precio $1.350.344), el descuento es del 5%. 
Si el coche a la venta es un Ford Focus (Código: 11451 Precio $1.750.502, el 
descuento es del 10%. El usuario ingresa el articulo o su código y el sistema 
saca el descuento, el valor total y el código correspondiente por pantalla.
*/

let fFiesta = new Car(11450, 1350.344, "Ford Fiesta", 5);
let fFocus = new Car(11451, 1750.502, "Ford Focus", 10);
let opcion = parseInt(prompt("1.Ingresar por nombre del artículo\n2.Ingresar por codigo\n Ingrese la opción deseada"));

while (isNaN(opcion) || opcion <= 0 || opcion > 2) {
    opcion = parseInt(prompt("Incorrecto. Ingrese la opción deseada"));
}

switch (opcion) {
    case 1:
        let nombreArticulo = prompt("Ingrese el modelo del vehículo");
        if (nombreArticulo.toLowerCase() === fFiesta.model.toLowerCase()) {
            showResponse(fFiesta);
        } else if (nombreArticulo.toLowerCase() === fFocus.model.toLowerCase()) {
            showResponse(fFocus);
        } else {
            console.log("Ese modelo no existe en nuestro inventario.");
        }
        break;
    case 2:
        let codigo = parseInt(prompt("Ingrese el código del producto."));
        if (codigo == fFiesta.code) {
            showResponse(fFiesta);
        } else if (codigo == fFocus.code) {
            showResponse(fFocus);
        } else {
            console.log("Ese modelo no existe en nuestro inventario.");
        }
        break;
    default:
        console.log("Opcion invalida");
        break;
}


function Car(code, price, model, discount) {
    this.code = code;
    this.price = price;
    this.model = model;
    this.discount = discount;
    this.getDiscount = function () {
        return ((this.price * this.discount) / 100).toFixed(2);
    };
    this.getFinalPrice = function () {
        return (this.price - this.getDiscount()).toFixed(2);
    }
}

function showResponse(car) {
    alert(`El codigo de producto es: ${car.code}\nEl descuento por este carro es de $${car.getDiscount()}, el precio final es $${car.getFinalPrice()}`);
}