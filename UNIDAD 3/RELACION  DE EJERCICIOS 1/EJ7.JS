function calcularFactoriales(hasta) {
    for (let i = 1; i <= hasta; i++) {
      let factorial = 1;
      for (let j = 2; j <= i; j++) {
        factorial *= j;
      }
      document.write(`El factorial de ${i} es: ${factorial}`+ "</br>");
    }
  }
  
  calcularFactoriales(10);