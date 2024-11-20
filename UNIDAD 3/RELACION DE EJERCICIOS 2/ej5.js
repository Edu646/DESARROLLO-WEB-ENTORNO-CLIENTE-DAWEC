function Pares_e_impares() {
    const numerosAleatorios = [];
    for (let i = 0; i < 100; i++) {
      numerosAleatorios.push(Math.floor(Math.random() * 1000) + 1);
    }
 
    document.write("Array original:");
    document.write(numerosAleatorios);
  

    const pares = [];
    const impares = [];
    numerosAleatorios.forEach(num => {
      if (num % 2 === 0) {
        pares.push(num);
      } else {
        impares.push(num);
      }
    });
  
    const numerosOrdenados = pares.concat(impares);
  

    console.log("Array ordenado por paridad:");
    console.log(numerosOrdenados);
  

    const resultado = document.getElementById("resultado");
    resultado.textContent = numerosOrdenados.join(", ");
  }
  
  paresImpares();