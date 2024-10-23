let nºcol = parseInt(prompt("Dime el numero de columnas"))
let nºfil = parseInt(prompt("Dime el numero de filas"))
let ancho = parseInt(prompt("Dime el ancho"))
let alto = parseInt(prompt("Dime el alto"))

document.write("<table border = " + 1 + ">")

for (let i = 1; i <= nºfil; i++){
    document.write("<tr height =" + alto + ">")
    for (let j = 1; j <= nºcol; j++){
        document.write("<td width =" + ancho + ">")
       
    }
    document.write("</tr>")
}



document.write("</table>")