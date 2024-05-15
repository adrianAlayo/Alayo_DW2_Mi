"use strict"

// Registro
let nombre;
let gmail; 
let contraseña;
function registroUsuario(){
    nombre = prompt("¿Cuál es tu nombre?")
    gmail= prompt("¿Cuál es tu email?")
    contraseña= prompt("¿Ingre una contraseña?")
    alert("Su nombre es: " + nombre + " y gmail: " + gmail);
}
registroUsuario();

//Iniciar Sesion
let gmailIngresado;
let contraseñaIngresada;
function inicioSesion(){
    gmailIngresado= prompt("Ingrese el Email")
    contraseñaIngresada= prompt("Ingre la contraseña")
    if(gmail == gmailIngresado && contraseña ==contraseñaIngresada){
        alert("Hola Bienvenido " + nombre)
    }else{
        alert("Ingres un GMAIL o Contraseña valida")
    }
}
inicioSesion()

//Actualizar CONTRASEÑA
let contraseñaNueva
function actualizarContraseña(){
    gmailIngresado= prompt("Ingrese el Email")
    contraseña = prompt("Ingre la contraseña")
    if(gmail == gmailIngresado && contraseña ==contraseñaIngresada){
        contraseñaNueva= prompt("Ingre la nueva contraseña")
        contraseña = contraseñaNueva;
        alert(contraseña);
    }else{
        alert("Ingres un GMAIL o Contraseña valida")
    }
    
}
actualizarContraseña()





