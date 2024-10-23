let nºcol = 8
let nºfil = 8
let ancho = 50
let alto = 50

document.write("<table border = " + 1 + ">")

for (let i = 1; i <= nºfil; i++){
    document.write("<tr height =" + alto + ">")
  
    for (let j = 1; j <= nºcol; j++){

        if(i%2==0){
            if (j% 2 == 0){
                document.write("<td width =" + ancho +"<table bgcolor = "+ "white"+"></td>")
            }
            else if(j % 2 != 0){
                document.write("<td width =" + ancho +"<table bgcolor = "+ "black"+"></td>")
            }
            
           
        }
        else if(i % 2 != 0){
            if (j% 2 == 0){
                document.write("<td width =" + ancho +"<table bgcolor = "+ "black"+"></td>")
            }
            else if(j % 2 != 0){
                document.write("<td width =" + ancho +"<table bgcolor = "+ "white"+"></td>")
            }
           
        }
       
    }
    document.write("</tr>")
 
}



document.write("</table>")