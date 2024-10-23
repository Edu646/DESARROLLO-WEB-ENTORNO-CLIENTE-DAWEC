/*5. Crea una web para resolver ecuaciones de segundo grado. Deber pedir por á
tanto los coeficientes y mostrar las soluciones posibles.*/ 



let a = parseFloat(prompt("Dime un numero"))
let b = parseFloat(prompt("Dime otro numero"))
let c = parseFloat(prompt("Dime otro numero"))

let raiz = b*b - 4*a*c 
let sol1 = (-b+Math.sqrt(raiz))/(2*a);
let sol2 = (-b-Math.sqrt(raiz))/(2*a);
document.write("<br>"+sol1+"<br>")
document.write("<br>"+sol2+"<br>")