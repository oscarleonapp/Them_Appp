/*
const titulo = document.getElementById("h1")
titulo.textContent = "Hola estoy programando"

//Mostrar un input para obtener la edad y verificar la informacion

const edad = prompt("Introduce tu edad")
console.assert(edad >= 18, "no se cumple la edad minima")
*/

/*
var edad = 151;
if (edad < 18) {
    console.log('No autorizado');
} else if (edad > 18) {
    console.log('Autorizado');
}
*/

/*
var edad = 151;

if (edad < 100) {
    console.log('Prohibido');
} else if (edad > 151){
    console.log('Imposible');
} else {
    console.log('Clausula final')
}
*/

/*
var n1 =100;
var n2 =120;
var suma = n1 + n2;

console.log(suma);
*/

/*
var edad = 20;

edad >18
? console.log('Estas autorizado')
: console.log('No estas autorizado');
*/

//EJERCICIO DE COLUMNAS ACTIVAS

//Guardar el estado (columna activa)
let columnaActiva = 1

//Seleccionar las columnas
const columnas = document.querySelectorAll(".columna")

//escuchar los clics en cada una de ellas

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
})

//Cambiar el estado de las columna  
function cambiarColumna (indice) {
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}