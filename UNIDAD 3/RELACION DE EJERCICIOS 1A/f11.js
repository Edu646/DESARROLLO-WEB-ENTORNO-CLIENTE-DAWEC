/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text) {
    // Crear un objeto para mapear las sustituciones
    const replacements = {
      a: '4',
      e: '3',
      i: '1',
      o: '0',
      s: '5'
    };
  
    // Convertir el texto a un array de caracteres
    const chars = text.split('');
  
    // Iterar sobre cada caracter y realizar la sustitución si es necesaria
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i].toLowerCase(); // Convertir a minúsculas para una comparación más sencilla
      chars[i] = replacements[char] || char; // Si existe una sustitución, usarla; sino, mantener el caracter original
    }
  
    // Unir los caracteres nuevamente en una cadena
    return chars.join('');
  }

  document.write(toHackerSpeak("I'm a hacker now"))