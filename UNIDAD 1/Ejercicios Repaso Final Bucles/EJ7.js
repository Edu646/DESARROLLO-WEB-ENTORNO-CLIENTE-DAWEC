let N = parseInt(prompt("Ingrese un número: "));


let suma = 0;

for (let i = 1; i <= N; i++) {
    suma += i;
}


document.write("La suma de los primeros " + N + " números es: " + suma);