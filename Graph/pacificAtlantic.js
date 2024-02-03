const directions = [
  [-1, 0], // top
  [0, 1], // right
  [1, 0], // bottom
  [0, -1], // left
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const pacific = new Set();
  const atlantic = new Set();
  const ROWS = heights.length;
  const COLS = heights[0].length;
  const res = [];

  const dfs = (r, c, visit, prevHeight) => {
    if (
      r < 0 ||
      r >= ROWS ||
      c < 0 ||
      c >= COLS ||
      visit.has(`${r}-${c}`) ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    visit.add(`${r}-${c}`);

    for (const [row, col] of directions) {
      dfs(r + row, c + col, visit, heights[r][c]);
    }
  };

  for (let c = 0; c < COLS; c++) {
    // find the top pacific
    dfs(0, c, pacific, heights[0][c]);
    // find the bottom atlantic
    dfs(ROWS - 1, c, atlantic, heights[ROWS - 1][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    // find the left pacific
    dfs(r, 0, pacific, heights[r][0]);
    // find the right atlantic
    dfs(r, COLS - 1, atlantic, heights[r][COLS - 1]);
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const key = `${i}-${j}`;
      if (pacific.has(key) && atlantic.has(key)) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

console.log(pacificAtlantic([[1]]));
