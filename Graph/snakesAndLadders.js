/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const length = board.length;
  board.reverse();

  const intToRowCol = (num) => {
    const row = Math.floor((num - 1) / length);
    let col = (num - 1) % length;

    if (row % 2 === 1) {
      col = length - 1 - col;
    }

    return [row, col];
  };

  const visited = new Set();
  //  square, move
  const queue = [[1, 0]];

  while (queue.length) {
    const [square, move] = queue.shift();

    for (let i = 1; i < 7; i++) {
      let nextSquare = square + i;

      //   convert square into [row, col]
      const [r, c] = intToRowCol(nextSquare);

      if (board[r][c] !== -1) {
        nextSquare = board[r][c];
      }
      //   find the result
      if (nextSquare === length * length) {
        return move + 1;
      }
      //   duplicate
      if (visited.has(nextSquare)) {
        continue;
      }
      visited.add(nextSquare);
      queue.push([nextSquare, move + 1]);
    }
  }

  return -1;
};

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);
