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

describe("Given the function aliveAround", () => {
  describe("When it recieves 2, 2, 4, 4, screenArray", () => {
    test("Then it should return 3", () => {
      const axisX = 2;
      const axisY = 2;
      const limitAxisX = 4;
      const limitAxisY = 4;
      const screenArray = [
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
      ];
      const expectNumber = 3;

      const resultText = aliveAround(
        axisX,
        axisY,
        limitAxisX,
        limitAxisY,
        screenArray
      );

      expect(resultText).toBe(expectNumber);
    });
  });

  describe("When it recieves 0, 2, 4, 4, screenArray", () => {
    test("Then it should return 2", () => {
      const axisX = 0;
      const axisY = 2;
      const limitAxisX = 4;
      const limitAxisY = 4;
      const screenArray = [
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
      ];
      const expectNumber = 2;

      const resultText = aliveAround(
        axisX,
        axisY,
        limitAxisX,
        limitAxisY,
        screenArray
      );

      expect(resultText).toBe(expectNumber);
    });
  });

  describe("When it recieves 4, 0, 4, 4, screenArray", () => {
    test("Then it should return 2", () => {
      const axisX = 4;
      const axisY = 0;
      const limitAxisX = 4;
      const limitAxisY = 4;
      const screenArray = [
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
        [false, true, false, false, true],
      ];
      const expectNumber = 2;

      const resultText = aliveAround(
        axisX,
        axisY,
        limitAxisX,
        limitAxisY,
        screenArray
      );

      expect(resultText).toBe(expectNumber);
    });
  });
});
