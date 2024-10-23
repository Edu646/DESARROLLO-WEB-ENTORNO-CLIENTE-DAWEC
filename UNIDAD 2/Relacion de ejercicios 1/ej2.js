/*2. Crea una p gina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a los a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes*/

const fechaHoy = new Date();
const fecha85 = new Date(fechaHoy)
const fecha187 = new Date(fechaHoy)
const fecha85_2 =  new Date(fechaHoy);
const fecha187_24=  new Date(fechaHoy)


fecha85.setDate(fechaHoy.getDate()+ 85);
fecha187.setDate(fechaHoy.getDate()- 187);
const fechaResto = fecha85 - fecha187;
const fecharesul = new Date(fechaResto)
fecha85_2.setFullYear(fechaHoy.getDate() + 2)
fecha187_24.setHours(fechaHoy.getDate()-24)


document.write(fechaHoy.toLocaleString() + "<br>")
document.write(fecha85.toLocaleString() + "<br>")
document.write(fecha187.toLocaleString() + "<br>")
document.write(fecha187_24.toLocaleString() + "<br>")
document.write(fecha85_2.toLocaleString() + "<br>")
document.write(fecharesul + "<br>")