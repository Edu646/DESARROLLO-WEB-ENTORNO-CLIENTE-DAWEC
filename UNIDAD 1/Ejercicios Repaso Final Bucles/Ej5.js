let numero = prompt("Ingrese un número entero positivo:");


while (isNaN(numero) || numero <= 0 || numero % 1 !== 0) {
    numero = prompt("Entrada inválida. Ingrese un número entero positivo:");
}


numero = parseInt(numero);


let suma = 0;


while (numero > 0) {
  suma += numero % 10;
  numero = Math.floor(numero / 10);
}


document.write("La suma de los dígitos es: " + suma);