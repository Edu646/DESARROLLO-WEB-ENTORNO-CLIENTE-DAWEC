/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function RandomSequence(length) {
    const options = ['rock', 'paper', 'scissors'];
    const sequence = [];
  
    for (let i = 0; i < length; i++) {
      // Genera un índice aleatorio entre 0 y 2
      const randomIndex = Math.floor(Math.random() * options.length);
      sequence.push(options[randomIndex]);
    }
  
    return sequence;
  }

  document.write(RandomSequence(4))