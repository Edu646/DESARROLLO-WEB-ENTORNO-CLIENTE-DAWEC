let edad = parseInt(prompt("Dime una edad"));

if (edad <= 5) {
  document.write("Jardin de infancia")
}
else if(edad >= 6 && edad <= 11) {
    document.write("Primaria");
  } else if (edad >= 12 && edad <= 16) {
    document.write("Eso");
  } else if (edad >= 17 && edad <= 21) {
    document.write("Ciclos");
  } else if (edad > 21){
    document.write("Uni");
  }
  else{
    document.write("La edad es mas pequeña")
  }