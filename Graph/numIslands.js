const directions = [
  [-1, 0], // top
  [0, 1], // right
  [1, 0], // bottom
  [0, -1], // left
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let countIslands = 0;

  const dfs = (row, col) => {
    debugger;
    grid[row][col] = '0';

    for (const [r, c] of directions) {
      const nextRow = row + r;
      const nextColumn = col + c;
      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextColumn < 0 ||
        nextColumn >= grid[0].length
      ) {
        continue;
      }
      if (grid[nextRow][nextColumn] === '1') {
        dfs(nextRow, nextColumn);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        countIslands += 1;
        dfs(i, j);
      }
    }
  }

  return countIslands;
};

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
