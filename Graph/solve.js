const directions = [
  [-1, 0], // top
  [0, 1], // right
  [1, 0], // bottom
  [0, -1], // left
];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= board.length ||
      c < 0 ||
      c >= board[0].length ||
      board[r][c] !== 'O'
    ) {
      return;
    }

    board[r][c] = 'T';
    for (const [row, col] of directions) {
      dfs(r + row, c + col);
    }
  };

  // capture unsurrounded regions (O -> T)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        (board[i][j] == 'O' && [0, board.length - 1].includes(i)) ||
        [0, board[0].length - 1].includes(j)
      ) {
        dfs(i, j);
      }
    }
  }

  // capture surrounding regions ( O -> X)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'T') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
};
