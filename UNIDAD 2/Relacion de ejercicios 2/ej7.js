/*7. Crea una web que genere una tabla con dos columnas. En la primera un
numero ascendente y en la otra el valor de su seno.*/

let numero = 10
document.write("<table border = " + 1 + ">")

for(i = numero ; i<=200;){
    document.write("<tr height = " +50+">")
    document.write("<td width ="+ 50 +">" +i+"></td>")
    document.write("<td width ="+ 50 +">" +Math.sin(i)+"></td>")
    document.write("</tr>") 
    i=i+10
}

