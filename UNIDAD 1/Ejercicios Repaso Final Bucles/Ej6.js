// Pedimos al usuario que ingrese los números
const N = parseInt(prompt("Ingrese el número inicial (N):"));
const M = parseInt(prompt("Ingrese el número final (M):"));

// Inicializamos la suma en 0
let suma = 0;

// Iteramos desde N hasta M, incrementando de 2 en 2 para obtener solo los pares
for (let i = N; i <= M; i += 2) {
    suma += i;
}

// Mostramos el resultado
document.write("La suma de los números pares entre", N, "y", M, "es:", suma);