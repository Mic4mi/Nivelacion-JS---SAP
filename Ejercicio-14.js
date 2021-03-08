/*
Ejercicio 3.
Un alumno desea saber ¿cuál será su calificación final en una materia específica?, 
dicha calificación se compone de los siguientes porcentajes:
•	55% del promedio de las tres calificaciones parciales.
•	30% de la calificación del examen final.
•	15% de la calificación de un trabajo final.
*/


let form = document.getElementById("myform");

function calcular() {
    let parcial1 = parseInt(form.elements["tCP1"].value || 0);
    let parcial2 = parseInt(form.elements["tCP2"].value || 0);
    let parcial3 = parseInt(form.elements["tCP3"].value || 0);
    let examenFinal = parseInt(form.elements["tEF"].value || 0);
    let trabajoFinal = parseInt(form.elements["tTF"].value || 0);
    let promedio = promedioParciales(parcial1, parcial2, parcial3);
    let porcentajePromedio = sacarPorcentaje(promedio, 55);
    let porcentajeExamenFinal = sacarPorcentaje(examenFinal, 30);
    let porcentajeTrabajoFinal = sacarPorcentaje(trabajoFinal, 15);

    form.elements["tPro"].value = promedio.toFixed(2);
    form.elements["tPar"].value = porcentajePromedio.toFixed(2);
    form.elements["tPEF"].value = porcentajeExamenFinal.toFixed(2);
    form.elements["tPTF"].value = porcentajeTrabajoFinal.toFixed(2);
    form.elements["tCF"].value = (porcentajePromedio + porcentajeExamenFinal + porcentajeTrabajoFinal).toFixed(2);
}

function promedioParciales(p1, p2, p3) {
    return (p1 + p2 + p3) / 3;
}

function sacarPorcentaje(n, porcentaje) {
    return (n * porcentaje) / 100;
}