 // Aquí tu código
const boton = document.getElementById('agregar');



boton.addEventListener("click", function(){


let hijo = document.createElement("li");
let elemento =document.createTextNode(prompt("Agregue un enlemento", ""));
texto= document.getElementById("lista").appendChild(hijo);
texto.appendChild(elemento);




});