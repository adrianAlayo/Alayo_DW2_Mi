"use strict";

// Registro
let nombre;
let gmail;
let contraseña;
let usuarios =[];
function registroUsuario(){
    nombre = prompt("¿Cuál es tu nombre?")
    gmail= prompt("¿Cuál es tu email?")
    contraseña= prompt("¿Ingre una contraseña?")
    alert("Su nombre es: " + nombre + " y gmail: " + gmail);
    let nuevoUsuario ={
        usuario:nombre,
        gmail:gmail,
        contraseña:contraseña
    }
    usuarios.push(nuevoUsuario)
    console.log(nuevoUsuario)
}
document.getElementById('btnRegistro').addEventListener('click', registroUsuario);

//Iniciar Sesion
let gmailIngresado;
let contraseñaIngresada;
function inicioSesion(){
    gmailIngresado= prompt("Ingrese el Email")
    contraseñaIngresada= prompt("Ingre la contraseña")

    let usuarioEncotnrado = false;
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].gmail == gmailIngresado && usuarios[i].contraseña == contraseñaIngresada){
            alert("Hola Bienvenido " + usuarios[i].nombre)

        }
    }
    if(!usuarioEncotnrado){
    alert("Ingres un GMAIL o Contraseña valida")
    }
}
document.getElementById('btnInicioSesion').addEventListener('click', inicioSesion);

//Actualizar CONTRASEÑA
let contraseñaNueva;
function actualizarContraseña(){
    let gmailIngresado = prompt("Ingrese el Email");
    let contraseñaIngresada = prompt("Ingrese la contraseña");

    let usuarioEncontrado = false;
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].gmail === gmailIngresado && usuarios[i].contraseña === contraseñaIngresada){
            let contraseñaNueva = prompt("Ingrese la nueva contraseña");
            usuarios[i].contraseña = contraseñaNueva;
            alert("Contraseña actualizada");
            usuarioEncontrado = true;
            break;
        }
    }
    if (!usuarioEncontrado) {
        alert("Ingrese un GMAIL o Contraseña válida");
    }
}
document.getElementById('btnActualizarContrasena').addEventListener('click', actualizarContraseña);
