"use strict"
// Función para cambiar el precio del producto
function cambiarPrecio() {
    document.getElementById("precioProducto").innerText = "Precio: $450";
}

// Función para cambiar el precio del producto a $500
function precioInicial() {
    document.getElementById("precioProducto").innerText = "Precio: $500";
}

// Función para modificar los estilos del título
function modificarEstilosTitulo() {
    const titulo = document.querySelector("#nombreProducto");
    titulo.style.color = "blue";
    titulo.style.fontSize = "2em";
    titulo.style.fontWeight = "bold";
}

// Función para restablecer los estilos del título
function restablecerEstilosTitulo() {
    const titulo = document.querySelector("#nombreProducto");
    titulo.style.color = "";
    titulo.style.fontSize = "";
    titulo.style.fontWeight = "";
}

// Asignar evento al botón para cambiar el precio a $450
document.getElementById("cambiarPrecioBtn").addEventListener("click", function() {
    cambiarPrecio();
    modificarEstilosTitulo();
});
// Asignar evento al botón para restablecer el precio a $500
document.getElementById("precioInicialBtn").addEventListener("click", function() {
    precioInicial();
    restablecerEstilosTitulo();
});