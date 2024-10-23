/*1. Crea una pagina en la que se muestre: 
• Un n mero aleatorio entre 0 y 1. 
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un n aleatorio entre esos dos 
valores.*/ 

let numero = Math.random(2);
document.write(numero)

document.write("<br>"+Math.random()*(200 - 100) +100+"</br>");

let n1 = parseInt(prompt("Dime un numero"))
let n2 = parseInt(prompt("Dime otro numero"))
document.write("<br>"+ Math.random()* (n2 -n1) + n1+"</br>");