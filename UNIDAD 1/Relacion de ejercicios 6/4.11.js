let nºcol = parseInt(prompt("Dime el numero de columnas"))
let ancho = parseInt(prompt("Dime el ancho"))
let alto = parseInt(prompt("Dime el alto"))

document.write("<table border = " + 1 + ">")
document.write("<tr height =" + alto +">")

for (let i = 1; i <= nºcol; i++){
    document.write("<td width =" + ancho + "></td>")
}

document.write("</tr>")
document.write("</table>")