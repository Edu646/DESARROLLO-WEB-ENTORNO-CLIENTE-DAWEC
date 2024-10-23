/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function factorial(n) {
    
    if (n == 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  

  let numero = 4;
  document.write(factorial(numero));