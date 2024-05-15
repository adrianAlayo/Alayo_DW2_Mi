"use strict";

// Definición del array de productos con sus nombres y precios iniciales
const productos = [
    { nombre: "cafe", precio: 0 },
    { nombre: "fideos", precio: 0 },
    { nombre: "carne", precio: 0 },
    { nombre: "atun", precio: 0 },
    { nombre: "Coca Cola", precio: 0 },
    { nombre: "Arroz", precio: 0 }
];

// Ciclo para recorrer cada producto y ajustar sus precios según las condiciones
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const nombreProducto = producto.nombre.toLowerCase();

    // Condiciones para ajustar el precio de cada producto
    if (nombreProducto === "cafe" || nombreProducto === "atun") {
        producto.precio = 300;
    } else if (nombreProducto === "fideos" || nombreProducto === "arroz") {
        producto.precio = 500;
    } else {
        producto.precio = 400;
    }
}

// Pregunta al usuario qué producto desea comprar
const eleccion = prompt("¿Qué producto desea?");
// Busca el producto seleccionado por el usuario en el array de productos
const productoSeleccionado = productos.find(producto => producto.nombre.toLowerCase() === eleccion.toLowerCase());

// Verifica si se encontró el producto seleccionado
if (productoSeleccionado) {
    // Pregunta al usuario la cantidad deseada del producto
    const cantidadDeseada = prompt("¿Cuál es la cantidad que desea comprar del producto?");

    // Verifica si la cantidad deseada es un número válido mayor o igual a 1
    if (!isNaN(cantidadDeseada) && cantidadDeseada >= 1) {
        // Calcula el precio original según la cantidad deseada y el precio del producto seleccionado
        const precioOriginal = productoSeleccionado.precio * cantidadDeseada;

        // Verifica si la cantidad deseada es mayor o igual a 5 para aplicar un descuento del 10%
        if (cantidadDeseada >= 5) {
            const montoDescuento = precioOriginal * 0.1; // Calcula el monto del descuento
            const precioConDescuento = precioOriginal - montoDescuento; // Calcula el precio con descuento
            alert(precioConDescuento); // Muestra el precio final con descuento
        } else {
            alert(precioOriginal); // Muestra el precio original sin descuento
        }
    } else {
        alert("La cantidad deseada debe ser un número válido mayor o igual a 1."); // Mensaje de error si la cantidad no es válida
    }
} else {
    alert("Producto no válido. Hasta luego"); // Mensaje si el producto seleccionado no está en la lista
}


/*
Explicacion de conceptos toda via no vimos en clase, pero utiliza porque ya los se:

-IsNaN()
-for()
-Metodo de javascript    find()       .toLowerCase()
-JSON
-Funcion flecha
        |
        |
        V
productos.find(...): Esto llama al método find en el array productos, que busca un elemento que cumpla con la condición especificada.

(producto => producto.nombre.toLowerCase() === eleccion.toLowerCase()): Esto es una función flecha (arrow function) que se pasa como argumento al método find. Esta función se ejecutará para cada elemento del array productos, y debe devolver true si el elemento cumple con la condición de búsqueda y false si no.

producto es el parámetro de la función que representa cada elemento del array productos que se está evaluando en cada iteración.

producto.nombre.toLowerCase(): Aquí accedemos al nombre de cada elemento (producto) del array productos y lo convertimos a minúsculas utilizando toLowerCase(). Esto es importante para hacer la comparación de manera insensible a mayúsculas/minúsculas.

eleccion.toLowerCase(): Similar a lo anterior, convertimos la elección del usuario (eleccion) a minúsculas utilizando toLowerCase() para hacer la comparación de manera uniforme.

producto.nombre.toLowerCase() === eleccion.toLowerCase(): Esta es la condición de búsqueda. Compara si el nombre del producto en minúsculas es igual a la elección del usuario en minúsculas. Si la condición es true, significa que hemos encontrado el producto seleccionado por el usuario.

*/
