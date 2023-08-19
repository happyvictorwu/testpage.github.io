const gameBoard = document.getElementById("gameBoard");

const boardSize = 4;
let board = [];

function createTile(value) {
  const tile = document.createElement("div");
  tile.textContent = value;
  tile.className = "tile";
  return tile;
}

function renderBoard() {
  gameBoard.innerHTML = "";
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const tile = createTile(board[i][j] || "");
      gameBoard.appendChild(tile);
    }
  }
}

function initBoard() {
  board = [];
  for (let i = 0; i < boardSize; i++) {
    const row = new Array(boardSize).fill(0);
    board.push(row);
  }

  addRandomTile();
  addRandomTile();
  renderBoard();
}

function addRandomTile() {
  const availablePositions = [];

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === 0) {
        availablePositions.push([i, j]);
      }
    }
  }

  if (availablePositions.length > 0) {
    const randomPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    board[randomPosition[0]][randomPosition[1]] = Math.random() < 0.9 ? 2 : 4;
  }
}

function startGame() {
  initBoard();
}

startGame();
