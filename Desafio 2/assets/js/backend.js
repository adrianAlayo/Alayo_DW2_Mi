"use strict"
const productos = [
    { nombre: "cafe", precio: 300 },
    { nombre: "fideos", precio: 500 },
    { nombre: "carne", precio: 400 },
    { nombre: "atun", precio: 300 },
    { nombre: "Coca Cola", precio: 400 },
    { nombre: "Arroz", precio: 500 }
];

let cantidadDeseada = prompt("¿Cuál es la Cantidad que desea Comprar del producto?")

function productoss(productoNombre, cantidadDeseada) {
    // Buscar el objeto producto correspondiente al nombre
    const producto = productos.find(producto => producto.nombre === productoNombre);

    // Verificar si el producto existe y si la cantidad deseada es un número válido
    if (producto && !isNaN(cantidadDeseada)) {
        let total = producto.precio * cantidadDeseada;
        alert("El costo de " + cantidadDeseada + " productos " + producto.nombre + " será de $" + total);
    } else {
        alert("Producto no encontrado o la cantidad deseada debe ser un número válido.");
    }
}
productoss("cafe",cantidadDeseada)

