let nºcol = parseInt(prompt("Dime el numero de columnas"))
let ancho = parseInt(prompt("Dime el ancho"))
let alto = parseInt(prompt("Dime el alto"))
let auxiliar = 1;
document.write("<table border = " + 1 +">" )
document.write("<tr height =" + alto +">")

while(auxiliar<= nºcol){
    if (auxiliar % 2 == 0){
        document.write("<td width =" + ancho +" bgcolor = "+ "white"+">")
    }
    else if(auxiliar % 2 != 0){
        document.write("<td width =" + ancho +" bgcolor = "+ "black"+">")
    }
    auxiliar ++;
}



document.write("</tr>")
document.write("</table>")