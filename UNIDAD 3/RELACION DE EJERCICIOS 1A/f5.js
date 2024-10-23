/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function secuenciaColoresAleatoria(colors, length) {
    
    const secuencia = [];
  
   
    for (let i = 0; i < length; i++) {
        
        const colorAleatorio = colors[Math.floor(Math.random() * colors.length)];

      secuencia.push(colorAleatorio);
    }
  
    return secuencia;
  }
  
  const coloresDisponibles = ["rojo", "verde", "azul", "amarillo"];
  const longitudSecuencia = 10;
  
  const secuenciaAleatoria = secuenciaColoresAleatoria(coloresDisponibles, longitudSecuencia);
  console.log(secuenciaAleatoria);




