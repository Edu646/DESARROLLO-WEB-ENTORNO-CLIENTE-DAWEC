
window.onload = function tre_r(){
    const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function init() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = i;
    cell.textContent = gameBoard[i];
    cell.addEventListener('click', handleClick);
    board.appendChild(cell);
  }
}

function handleClick(event) {
  const cell = event.target;
  const index = cell.id;

  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      alert(`${currentPlayer} ha ganado!`);
    } else if (checkDraw()) {
      alert('¡Empate!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

init();
}
