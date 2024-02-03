const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = [];
  let times = 0;
  let fresh = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === ROTTEN) {
        queue.push([r, c]);
      } else if (grid[r][c] === FRESH) {
        fresh++;
      }
    }
  }

  while (queue.length && fresh) {
    debugger;
    times++;
    // shift the current rotten orange
    const lengthQueue = queue.length;

    for (let i = 0; i < lengthQueue; i++) {
      const [row, col] = queue.shift();
      for (const [r, c] of directions) {
        const nextRow = row + r;
        const nextCol = col + c;
        if (
          nextRow < 0 ||
          nextRow >= grid.length ||
          nextCol < 0 ||
          nextCol >= grid[0].length
        ) {
          continue;
        }
        if (grid[nextRow][nextCol] === FRESH) {
          grid[nextRow][nextCol] = ROTTEN;
          queue.push([nextRow, nextCol]);
          fresh--;
        }
      }
    }
  }

  return fresh > 0 ? -1 : times;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
