"use strict"
// Crear un array de productos
let productos = [
    { nombre: "Producto 1", stock: 10 },
    { nombre: "Producto 2", stock: 15 },
    { nombre: "Producto 3", stock: 20 },
    { nombre: "Producto 4", stock: 5 }
];

let stockInicial = JSON.parse(JSON.stringify(productos));

// Imprimir el stock inicial sin modificaciones
console.log("Stock inicial:");
console.log(stockInicial);

console.log("......................................................")

// Preguntar al usuario qué producto quiere y cuántos
let productoElegido = prompt("¿Qué producto desea comprar? (Ingrese el número del producto)");
let cantidadDeseada = parseInt(prompt("¿Cuántos desea comprar?"));

// Verificar si hay suficiente stock
if (productos[productoElegido - 1] && cantidadDeseada <= productos[productoElegido - 1].stock) {
    // Reducir el stock del producto elegido utilizando un bucle for
    for (let i = 0; i < cantidadDeseada; i++) {
        productos[productoElegido - 1].stock--;
    }
    console.log(`Ha comprado ${cantidadDeseada} unidades de ${productos[productoElegido - 1].nombre}.`);
} else {
    console.log("Lo siento, no hay suficiente stock de ese producto.");
}

// Imprimir el nuevo stock después de la venta
console.log("Nuevo stock después de la venta:");
console.log(productos);