let nºcol = parseInt(prompt("Dime el numero de columnas"))
let ancho = parseInt(prompt("Dime el ancho"))
let alto = parseInt(prompt("Dime el alto"))

document.write("<table border = " + 1  +">" )
document.write("<tr height =" + alto +">")


for (let i = 1; i <= nºcol; i++){
    if (i % 2 == 0){
        document.write("<td width =" + ancho +"<table bgcolor = "+ "white"+"></td>")
    }
    else if(i % 2 != 0){
        document.write("<td width =" + ancho +"<table bgcolor = "+ "black"+"></td>")
    }
    
}

document.write("</tr>")
document.write("</table>")