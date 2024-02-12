// 1958. Check if Move is Legal

/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function (board, rMove, cMove, color) {
  const ROWS = board.length;
  const COLS = board[0].length;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  board[rMove][cMove] = color;

  const checkLegal = (row, col, direction) => {
    const [r, c] = direction;
    let newRow = row + r;
    let newCol = col + c;
    let length = 1;

    while (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      length++;
      if (board[newRow][newCol] === '.') {
        return false;
      }
      if (board[newRow][newCol] === color) {
        return length >= 3;
      }

      newRow += r;
      newCol += c;
    }
  };

  for (const direction of directions) {
    if (checkLegal(rMove, cMove, direction)) {
      return true;
    }
  }

  return false;
};
