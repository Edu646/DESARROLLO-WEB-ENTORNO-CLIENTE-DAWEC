function creartabla(){
    let nºcol = parseInt(prompt("Dime el numero de columnas"))
    let nºfil = parseInt(prompt("Dime el numero de filas"))
    let ancho = 30
    let alto = 30
    
    document.write("<table border = " + 1 + ">")
    
    for (let i = 1; i <= nºfil; i++){
        document.write("<tr height =" + alto + ">")
        for (let j = 1; j <= nºcol; j++){
            document.write("<td width =" + ancho + ">")
           
        }
        document.write("</tr>")
    }

    document.write("</table>")
}


creartabla()





function cambiarColor(celda) {
    celda.style.backgroundColor = "blue"; 
   
}
  let celdas = document.querySelectorAll("td");
  celdas.forEach(celda => {
    celda.addEventListener("mouseover", (e) => {
      if(e.ctrlKey){
        cambiarColor(celda)
      }
    });
  });

  function cambiarColor1(celda2) {
    celda2.style.backgroundColor = "red"; 
}
  let celdas1 = document.querySelectorAll("td");
  celdas1.forEach(celda2 => {
    celda2.addEventListener("mouseover", (f) => {
      if(f.shiftKey){
        cambiarColor1(celda2)
      }
    });
  });

  function cambiarColor2(celda3) {
    celda3.style.backgroundColor = "white"; 
}
  let celdas2 = document.querySelectorAll("td");
  celdas2.forEach(celda3 => {
    celda3.addEventListener("mouseover", (l) => {
      if(l.altKey){
        cambiarColor2(celda3)
      }
    });
  });


  const btn = document.getElementsByTagName("button");

function borrar_tabla(){
    const tabla = document.getElementsByTagName('table')
    tabla.remove(tabla)
}

btn.addEventListener("click",() => borrar_tabla())