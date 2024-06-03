"use strict";

// Crear un botón con createElement
const boton = document.createElement("button");

// Asignar el ID 'btnCarrito' al botón
boton.id = "btnCarrito";

// Agregar el texto "Agregar al carrito" al botón
boton.innerHTML = "Agregar al carrito";

// Función para manejar el evento click en el botón
function manejarClick() {
    // Crear un nuevo elemento <h3>
    const mensaje = document.createElement("h3");
    
    // Modificar el texto del nuevo elemento <h3>
    mensaje.innerHTML = "Agregado";
    
    // Agregar el nuevo elemento <h3> al body del documento
    document.body.appendChild(mensaje);
    
    // Cambiar el texto del botón
    boton.innerHTML = "Agregado";
}

// Escuchar el evento "click" sobre el botón
boton.addEventListener("click", manejarClick);

// Agregar el botón generado al body del documento
document.body.appendChild(boton);