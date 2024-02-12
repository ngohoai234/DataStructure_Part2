/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) {
    return -1;
  }
  let res = 1;

  const queue = [[0, 0]];
  grid[0][0] = 1;
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

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift();

      if (row === ROWS - 1 && col === COLS - 1) {
        return res;
      }

      for (const [r, c] of directions) {
        const nextRow = row + r;
        const nextCol = col + c;

        if (
          nextRow < 0 ||
          nextRow >= ROWS ||
          nextCol < 0 ||
          nextCol >= COLS ||
          grid[nextRow][nextCol] === 1
        ) {
          continue;
        }
        queue.push([nextRow, nextCol]);
        grid[nextRow][nextCol] = 1;
      }
    }

    res += 1;
  }

  return -1;
};

// return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell  to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

//  All the visited cells of the path are 0.
//  All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);
