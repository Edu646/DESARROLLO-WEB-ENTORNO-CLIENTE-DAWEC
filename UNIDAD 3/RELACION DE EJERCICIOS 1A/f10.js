/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */
function areArraysEqual(a, b) {
    // Compara las longitudes de los arreglos
    if (a.length !== b.length) {
      return false;
    }
  
    // Compara cada elemento en el mismo índice
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
  
    // Si se llega a este punto, todos los elementos son iguales
    return true;
  }

document.write(areArraysEqual([1, 4], [1, 4]))