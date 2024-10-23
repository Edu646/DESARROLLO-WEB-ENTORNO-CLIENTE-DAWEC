/* 1. Realiza una p gina que cree un objeto de tipo Date y muestre en la á
p gina la siguiente informaci n (cada una en una l nea): á ó í
• El a o actual ñ
• El mes actual
• El d a actual í
• La hora actual
• Los minutos actuales
• Los segundos actuales*/

let fecha1 = new Date();

document.write(fecha1.getFullYear() + "<br>");
document.write(fecha1.getMonth() + "<br>");
document.write(fecha1.getDay() + "<br>");
document.write(fecha1.getHours() + "<br>");
document.write(fecha1.getMinutes() + "<br>");
document.write(fecha1.getSeconds() + "<br>");