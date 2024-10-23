// a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
function invierteCadena(cad_arg) {
    return cad_arg.split("").reverse().join("");
  }
  
  // b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la cadena
  function inviertePalabras(cad_arg) {
    var palabras = cad_arg.split(" ");
    var palabrasInvertidas = [];
    for (var i = 0; i < palabras.length; i++) {
      palabrasInvertidas.push(invierteCadena(palabras[i]));
    }
    return palabrasInvertidas.join(" ");
  }
  
  // c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada devuelve la longitud de la palabra más larga en ella contenida
  function encuentraPalabraMasLarga(cad_arg) {
    var palabras = cad_arg.split(" ");
    var longitudMaxima = 0;
    for (var i = 0; i < palabras.length; i++) {
      if (palabras[i].length > longitudMaxima) {
        longitudMaxima = palabras[i].length;
      }
    }
    return longitudMaxima;
  }
  
  // d) filtraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un valor numérico (i), devuelve el número de palabras cuya longitud es mayor a i
  function filtraPalabrasMasLargas(cad_arg, i) {
    var palabras = cad_arg.split(" ");
    var contador = 0;
    for (var j = 0; j < palabras.length; j++) {
      if (palabras[j].length > i) {
        contador++;
      }
    }
    return contador;
  }
  
  // e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada, de tal modo que solo aparece en mayúscula la primera letra y el resto en minúscula
  function cadenaBienFormada(cad_arg) {
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
  }
  
  // Función para mostrar los resultados
  function mostrarResultados() {
    var cadena = prompt("Ingrese una cadena de texto:");
    var resultados = "";
  
    resultados += "Cadena invertida: " + invierteCadena(cadena) + "\n";
    resultados += "Palabras invertidas: " + inviertePalabras(cadena) + "\n";
    resultados += "Longitud de la palabra más larga: " + encuentraPalabraMasLarga(cadena) + "\n";
    resultados += "Número de palabras con longitud mayor a 5: " + filtraPalabrasMasLargas(cadena, 5) + "\n";
    resultados += "Cadena bien formada: " + cadenaBienFormada(cadena) + "\n";
  
    document.write("<h2>Resultados</h2>");
    document.write("<pre>" + resultados + "</pre>");
  }
  
  // Llamar a la función para mostrar los resultados
  mostrarResultados();