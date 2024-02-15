/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const directions = [
    [-1, 0], // top
    [0, 1], // right
    [1, 0], // bottom
    [0, -1], // left
  ];
  let res = 0;

  const dfs = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return 0;
    }
    if (grid[row][col] === 1) {
      return 1;
    }

    // mark to know visited cells
    grid[row][col] = 1;
    let isValid = 1;

    for (const [r, c] of directions) {
      isValid = dfs(row + r, col + c) && isValid;
    }

    return isValid;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) {
        res += dfs(row, col);
      }
    }
  }

  return res;
};
