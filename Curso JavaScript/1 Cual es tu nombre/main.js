//Escuchar el click en el botón
const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre)

//Guardamos referencias a los heading
const h1 = document.getElementById("h1")

//Preguntar y guardar el nombre del usuario
function preguntarNombre(){
    const nombre = prompt("Introduce tu nombre")
    mostrarNombre(nombre)
}

//Insertar el nombre donde ahora estan los ...
function mostrarNombre(nombre){
h1.textContent = nombre
h2.textContent = "Hola"
}