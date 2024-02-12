/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const directions = [
    [-1, 0], // top
    [0, 1], // right
    [1, 0], // bottom
    [0, -1], // left
  ];

  const visited = new Set();

  const invalid = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return true;
    }
    return false;
  };

  // find the first water
  const dfs = (row, col) => {
    if (
      invalid(row, col) ||
      grid[row][col] === 0 ||
      visited.has(`${row}-${col}`)
    ) {
      return;
    }
    visited.add(`${row}-${col}`);
    for (const [r, c] of directions) {
      dfs(row + r, col + c);
    }
  };
  // count the minimum
  const bfs = () => {
    const queue = [...visited];
    let res = 0;
    while (queue.length) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const [row, col] = queue.shift().split('-');
        for (const [r, c] of directions) {
          const nextRow = Number(row) + r;
          const nextCol = Number(col) + c;

          if (
            invalid(nextRow, nextCol) ||
            visited.has(`${nextRow}-${nextCol}`)
          ) {
            continue;
          }
          if (grid[nextRow][nextCol] === 1) {
            return res;
          }
          queue.push(`${nextRow}-${nextCol}`);
          visited.add(`${nextRow}-${nextCol}`);
        }
      }
      res += 1;
    }
    return res;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        dfs(row, col);
        return bfs();
      }
    }
  }
  return 0;
};

// 1: land

// 0: water

// return the smallest number of 0's you must flip to connect the two islands

console.log(
  shortestBridge([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);
