/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const seenCol = new Set();
  const posDiag = new Set();
  const negDiag = new Set();
  const boards = new Array(n).fill().map(() => new Array(n).fill('.'));

  const bt = (row) => {
    let count = 0;
    if (row === n) {
      return 1;
    }
    for (let col = 0; col < n; col++) {
      if (
        seenCol.has(col) ||
        posDiag.has(row + col) ||
        negDiag.has(row - col)
      ) {
        continue;
      }

      boards[row][col] = 'Q';
      seenCol.add(col);
      posDiag.add(row + col);
      negDiag.add(row - col);

      count += bt(row + 1);

      boards[row][col] = '.';
      seenCol.delete(col);
      posDiag.delete(row + col);
      negDiag.delete(row - col);
    }
    return count;
  };

  return bt(0);
};
