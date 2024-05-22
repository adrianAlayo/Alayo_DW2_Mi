"use strict"
// Crear un objeto llamado producto que representa un producto de un e-commerce
let producto = {
    nombre: "Camiseta",       // Asignar propiedades iniciales
    precio: 19.99,
    cantidadDisponible: 100
};

console.log(producto);        // Mostrar el objeto inicial

// Modificar la propiedad nombre del producto
producto.nombre = "Zapatillas";
console.log(producto);        // Mostrar el objeto después de cambiar el nombre

// Añadir la propiedad categoría al objeto producto
producto.categoria = "calzado";
console.log(producto);        // Mostrar el objeto después de añadir la categoría

// Eliminar la propiedad cantidadDisponible del objeto producto
delete producto.cantidadDisponible;
console.log(producto);        // Mostrar el objeto después de eliminar la propiedad cantidadDisponible
