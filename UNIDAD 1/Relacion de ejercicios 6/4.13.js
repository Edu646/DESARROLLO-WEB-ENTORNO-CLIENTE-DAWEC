


let nºcol = parseInt(prompt("Dime el numero de columnas"))
let ancho = parseInt(prompt("Dime el ancho"))
let alto = parseInt(prompt("Dime el alto"))
let auxiliar = 0

document.write("<table border = " + 1 + ">")
document.write("<tr height =" + alto +">")

while(auxiliar!= nºcol){
    document.write("<td width =" + ancho + "></td>")
    auxiliar ++;
}


document.write("</tr>")
document.write("</table>")