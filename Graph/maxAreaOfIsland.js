const directions = [
  [-1, 0], // top
  [0, 1], // right
  [1, 0], // bottom
  [0, -1], // left
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxCount = 0;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === 0
    ) {
      return 0;
    }

    grid[r][c] = 0;

    let count = 1;

    for (const [row, col] of directions) {
      count += dfs(r + row, c + col);
    }

    return count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxCount = Math.max(maxCount, dfs(i, j));
      }
    }
  }

  return maxCount;
};

// given m x n binary matrix

// Return the maximum area of an island in grid. If there is no island, return 0.
// https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
