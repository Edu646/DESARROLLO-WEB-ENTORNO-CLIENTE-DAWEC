/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */
let number= [5,7,8,32,45,98,100];

function  getBiggestNumber(){
     return Math.max(...number);
}
document.write(getBiggestNumber());
