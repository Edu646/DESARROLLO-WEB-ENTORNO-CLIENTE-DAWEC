/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

let x;
function impar(){
    if( x % 2 != 0  ){
        return true;
    }else{
        return false;
    }
}

document.write(impar(5));


