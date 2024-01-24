// 79. Word Search

const isOutOfBound = (board, row, col) => {
  const isRowOutOfBound = row < 0 || board.length - 1 < row;
  const isColOutOfBound = col < 0 || board[0].length - 1 < col;
  return isRowOutOfBound || isColOutOfBound;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const bt = (row, col, word, index) => {
    if (index === word.length) {
      return true;
    }

    if (isOutOfBound(board, row, col)) {
      return false;
    }

    if (board[row][col] !== word[index]) {
      return false;
    }

    board[row][col] = '*';

    const hasWord =
      bt(row - 1, col, word, index + 1) ||
      bt(row + 1, col, word, index + 1) ||
      bt(row, col - 1, word, index + 1) ||
      bt(row, col + 1, word, index + 1);
    board[row][col] = word[index];

    return hasWord;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (bt(row, col, word, 0)) {
        return true;
      }
    }
  }

  bt(0, 0, '', 0);

  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
