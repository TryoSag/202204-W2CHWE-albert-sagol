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
cellState();
