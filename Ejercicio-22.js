/*
El cliente tiene una pastelería. Quiere ofrecer descuentos a las empresas
que compran sus productos (en este caso, tortas) en cantidad.  Estos
descuentos dependen de la cantidad de tortas compradas por cada empresa
precargada en el sistema.

*Si una empresa compra más de 100 tortas, tienen un 10% de descuento en 
sus próximas compras.

*Si una empresa compra más de 500 tortas, tienen un 15% de descuento.

*Independientemente de cuántas tortas compre, si compra 
más de 10 tortas, recibe 1 torta extra cada 15 tortas compradas.

Al cliente le gustaría saber en cada pedido de las empresas que tiene 
precargadas cuánto debería cobrarles, teniendo en cuenta si tienen 
descuentos o no y si debería darle tortas extras y cuántas.

Requerimientos

* Hacer un programa que modele los descuentos y tortas extras.

* Utilizar los descuentos y tortas extras a la hora de hacer un pedido y que en 
base a ellos indique cuánto cobrarle a la empresa y cuántas tortas enviarle.

*/
const PRECIO = 100;
let empresas = [new Empresa("Accenture", 0), new Empresa("Banco Santander", 0), new Empresa("IBM", 0)];

cargarUnidades(empresas);
ejecutarEjercicio(empresas);

function ejecutarEjercicio(listaEmpresas) {
    for (let i = 0; i < listaEmpresas.length; i++) {
        //sacar precio final
        let precioFinal = calcularPrecioFinal(listaEmpresas[i]);

        //sacar extras
        let totalTortas = calcularTotalUnidades(listaEmpresas[i]);
        let tortasExtras = listaEmpresas[i].calcularExtras();

        // mensaje final
        console.log(`${listaEmpresas[i].name}\nPaga $${precioFinal}\nSe lleva ${totalTortas} tortas en total, teniendo como beneficio ${tortasExtras} tortas extras.\n\n`);
    }
}

function calcularPrecioFinal(empresa) {
    let porcentaje = empresa.calcularDescuento();
    let precio = empresa.units * PRECIO;
    let descuento = (precio * porcentaje) / 100;
    return precio - descuento;
}

function calcularTotalUnidades(empresa) {
    let tortasExtras = empresa.calcularExtras();
    return empresa.units + tortasExtras;
}

function cargarUnidades(empresas) {
    for (let i = 0; i < empresas.length; i++) {

        let carga = parseInt(prompt(`Ingrese las unidades que compró la compañía ${empresas[i].name}`));

        while (!Number.isInteger(carga) || carga < 0) {
            carga = parseInt(prompt(`Dato Invalido\nIngrese las unidades que compró la compañía ${empresas[i].name}`));
        }

        empresas[i].units = carga;
    }
}

function Empresa(name, units) {
    this.name = name;
    this.units = units;
    this.calcularDescuento = function () {
        let descuento = 0;
        if (this.units > 100 && this.units < 500) {
            descuento = 10;
        } else if (this.units > 500) {
            descuento = 15;
        }
        return descuento;
    }
    this.calcularExtras = function () {
        let extras = 0;
        if (this.units > 10) {
            extras = Math.floor(this.units / 15);
        }
        return extras;
    }
}

