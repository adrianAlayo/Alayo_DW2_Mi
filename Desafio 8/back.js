"use strict";

// Declarar un array con nombres de productos
const productos = ["Camiseta", "Pantalones", "Zapatillas", "Gorra", "Chaqueta"];

// Recorrer el array con for of
for (const producto of productos) {
    // Crear una etiqueta <h2> para cada producto
    const h2 = document.createElement("h2");
    
    // Modificar su innerHTML para que contenga el nombre del producto
    h2.innerHTML = producto;
    
    // Agregar la etiqueta <h2> al body del documento
    document.body.appendChild(h2);
}