"use strict";

let pan = document.querySelectorAll(".pan");
let li = document.querySelectorAll("li");


console.log(pan[2]);

let colores = ["blue", "green", "red"];

for (let i = 0; i < pan.length; i++) {
    pan[i].style.backgroundColor = colores[i];  // Usar '=' en lugar de '-'
}
//
for (let i = 0; i < li.length; i++) {
    li[i].style.color = "yellow";  // Usar '=' en lugar de '-'
}