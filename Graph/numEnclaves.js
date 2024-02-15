/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let res = 0;

  const directions = [
    [-1, 0], // top
    [0, 1], // right
    [1, 0], // bottom
    [0, -1], // left
  ];

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === 0
    ) {
      return;
    }
    grid[row][col] = 0;

    for (const [r, c] of directions) {
      dfs(row + r, col + c);
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (
        row === 0 ||
        col === 0 ||
        row === grid.length - 1 ||
        col === grid[row].length - 1
      ) {
        dfs(row, col);
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      res += grid[row][col];
    }
  }

  return res;
};

// 0 represents a sea cell

// 1 represents a land cell.

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
