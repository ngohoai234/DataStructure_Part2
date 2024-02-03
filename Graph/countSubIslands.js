const directions = [
  [-1, 0], // top
  [0, 1], // right
  [1, 0], // bottom
  [0, -1], // left
];

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let count = 0;
  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= grid2.length ||
      c < 0 ||
      c >= grid2[0].length ||
      grid2[r][c] === 0
    ) {
      return true;
    }

    grid2[r][c] = 0;

    let isValid = true;

    if (grid1[r][c] === 0) {
      isValid = false;
    }

    for (const [row, col] of directions) {
      isValid = dfs(r + row, c + col) && isValid;
    }
    return isValid;
  };

  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid2[i][j] === 1 && dfs(i, j)) {
        count += 1;
      }
    }
  }

  return count;
};

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);
