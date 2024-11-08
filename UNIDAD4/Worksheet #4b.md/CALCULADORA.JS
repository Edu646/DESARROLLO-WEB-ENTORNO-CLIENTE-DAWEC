// CALCULADORA.JS

const pantalla = document.getElementById('pantalla');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const igual = document.getElementById('igual');
const borrar = document.getElementById('borrar');

let numeroActual = '';
let operador = '';
let primerNumero = null;

function actualizarPantalla() {
  pantalla.value = numeroActual;
}

numeros.forEach(numero => {
  numero.addEventListener('click', () => {
    numeroActual += numero.textContent;
    actualizarPantalla();
  });
});

operadores.forEach(operadorBtn => {
  operadorBtn.addEventListener('click', () => {
    if (numeroActual !== '') {
      primerNumero = parseFloat(numeroActual);
      operador = operadorBtn.textContent;
      numeroActual = '';
    }
  });
});

igual.addEventListener('click', () => {
  if (numeroActual !== '' && operador !== '') {
    const segundoNumero = parseFloat(numeroActual);
    switch (operador) {
      case '+':
        resultado = primerNumero + segundoNumero;
        break;
      case '-':
        resultado = primerNumero - segundoNumero;
        break;
      case 'x':
        resultado = primerNumero * segundoNumero;
        break;
      case '÷':
        if (segundoNumero === 0) {
          pantalla.value = 'Error: División por cero';
          return;
        }
        resultado = primerNumero / segundoNumero;
        break;
    }
    numeroActual = resultado.toString();
    actualizarPantalla();
    operador = '';
    primerNumero = null;
  }
});

borrar.addEventListener('click', () => {
  numeroActual = '';
  operador = '';
  primerNumero = null;
  actualizarPantalla();
});