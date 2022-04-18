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
  if (axisX + 1 > limitAxisX - 1) {
    maxIndexX = 0;
  }
  if (axisY + 1 > limitAxisY - 1) {
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
  let actualSquare;

  for (let x = 0; x < sizeX; x++) {
    const newColumn = document.createElement("div");
    for (let y = 0; y < sizeY; y++) {
      const newSquare = document.createElement("div");
      actualSquare = tableArray[x][y];
      if (actualSquare) {
        newSquare.classList.add(".itsAlive");
      }
      newColumn.appendChild(newSquare);
    }
    gameTable.appendChild(newColumn);
  }
};

const cleanTable = () => {
  document.getElementById("game-table").innerHTML = "";
};

const demoArray = () => [
  [false, false, false, false, false, false, false, false, false],
  [true, true, true, false, false, false, true, true, true],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, true, true, true, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [true, true, true, false, false, false, true, true, true],
  [false, false, false, false, false, false, false, false, false],
];
const gameOfLife = () => {
  const nextTableArray = demoArray();
  const sizeX = 9;
  const sizeY = 9;
  let gameArray = demoArray();

  while (true) {
    tableCreator(sizeX, sizeY, gameArray);

    for (let x = 0; x < sizeX; x++) {
      for (let y = 0; y < sizeY; y++) {
        nextTableArray[x].push(cellState(x, y, sizeX, sizeY, gameArray));
      }
    }
    gameArray = nextTableArray;
    window.setTimeout(cleanTable(), 1000);
  }
};

gameOfLife();
