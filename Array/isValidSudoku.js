/**
 * @param {character[][]} board
 * @return {boolean}
 */

const ROW = 9,
  COLUMN = 9,
  EMPTY = '.';

const isValidSudoku = function (board) {
  const result = [];

  for (let row = 0; row < ROW; row++) {
    const parentRow = Math.floor(row / 3);
    for (let column = 0; column < COLUMN; column++) {
      const parentColumn = Math.floor(column / 3);
      const character = board[row][column];
      if (character === EMPTY) {
        continue;
      }
      result.push(
        `r-${row}-${character}`,
        `c-${column}-${character}`,
        `${parentRow}-${parentColumn}-${character}`
      );
      if (result.length !== new Set(result).size) {
        return false;
      }
    }
  }
  return true;
};

isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
