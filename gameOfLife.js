const aliveAround = (axisX, axisY, limitAxisX, limitAxisY, screenArray) => {
  let minIndexX = -1;
  let minIndexY = -1;
  let maxIndexX = 1;
  let maxIndexY = 1;
  let neighborAlive = 0;

  if (axisX - 1 < 0) {
    minIndexX = 0;
  }
  if (axisY - 1 < 0) {
    minIndexY = 0;
  }
  if (axisX + 1 > limitAxisX) {
    maxIndexX = 0;
  }
  if (axisY + 1 > limitAxisY) {
    maxIndexY = 0;
  }

  for (let x = minIndexX; x <= maxIndexX; x++) {
    for (let y = minIndexY; y <= maxIndexY; y++) {
      if (screenArray[axisX + x][axisY + y]) {
        neighborAlive++;
      }
    }
  }

  if (screenArray[axisX][axisY]) {
    neighborAlive--;
  }
  return neighborAlive;
};

const cellState = (actualX, actualY, limitX, limitY, screenArray) => {
  const cellAround = aliveAround(actualX, actualY, limitX, limitY, screenArray);

  if (cellAround < 2 || cellAround > 3) {
    return false;
  }
  if (screenArray[actualX][actualY] === false && cellAround === 2) {
    return false;
  }
  return true;
};

const tableCreator = (sizeX, sizeY, tableArray) => {
  const gameTable = document.getElementById("game-table");

  for (let x = 0; x < sizeX; x++) {
    const newColumn = document.createElement("div");
    for (let y = 0; y < sizeY; y++) {
      const newSquare = document.createElement("div");
      if (tableArray[x][y]) {
        newSquare.classList.add("itsAlive");
      }
      newColumn.appendChild(newSquare);
    }
    gameTable.appendChild(newColumn);
  }
};

const cleanTable = () => {
  document.getElementById("game-table").innerHTML = "";
};

const randomArray = (sizeX, sizeY) => {
  const randomStart = [];

  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      randomStart[x][y] = Math.random() > 0.66;
    }
  }
  return randomStart;
};

const gameOfLife = () => {
  const nextTableArray = [];
  const sizeX = 30;
  const sizeY = 20;
  let gameArray = randomArray(sizeX, sizeY);

  while (true) {
    tableCreator(sizeX, sizeY, gameArray);

    for (let x = 0; x < sizeX; x++) {
      for (let y = 0; y < sizeY; y++) {
        nextTableArray[x][y] = cellState(x, y, sizeX, sizeY, gameArray);
      }
    }
    gameArray = nextTableArray;
    cleanTable();
  }
};

gameOfLife();
