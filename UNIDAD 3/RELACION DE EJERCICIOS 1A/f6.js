/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */
let opc = ["rock", "paper", "scissor"]
function juego(){
   return opc[Math.floor(Math.random() * opc.length)]
}

document.write(juego());
