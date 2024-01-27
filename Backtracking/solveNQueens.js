/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const seenCol = new Set();
  const posDiag = new Set();
  const negDiag = new Set();
  const res = [];
  const boards = new Array(n).fill().map(() => new Array(n).fill('.'));

  const bt = (row) => {
    if (row === n) {
      const rows = boards.map((_row) => _row.join(''));
      res.push(rows);
      return;
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

      bt(row + 1);

      boards[row][col] = '.';
      seenCol.delete(col);
      posDiag.delete(row + col);
      negDiag.delete(row - col);
    }
  };

  bt(0);
  return res;
};

console.log(solveNQueens(4));
