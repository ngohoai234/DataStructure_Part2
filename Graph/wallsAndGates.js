/**
 * @param {number[][]} rooms
 * @return {number[][]}
 */
var wallsAndGates = function (rooms) {
  const queue = [];
  const visited = new Set();
  const ROWS = rooms.length;
  const COLS = rooms[0].length;
  let count = 0;

  const fillRoom = (r, c) => {
    if (
      r < 0 ||
      r >= ROWS ||
      c < 0 ||
      c >= COLS ||
      rooms[r][c] === -1 ||
      visited.has(`${r}-${c}`)
    ) {
      return;
    }
    visited.add(`${r}-${c}`);
    queue.push([r, c]);
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift();
      rooms[r][c] = count;
      visited.add(`${r}-${c}`);

      fillRoom(r + 1, c);
      fillRoom(r - 1, c);
      fillRoom(r, c + 1);
      fillRoom(r, c - 1);
    }
    count++;
  }
};
