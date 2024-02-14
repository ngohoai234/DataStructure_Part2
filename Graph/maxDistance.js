const WATER = 0;
const ISLAND = 1;
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const queue = [];
  let step = -1;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited = Array.from({ length: grid.length }).map(() =>
    Array.from({ length: grid.length }).fill(false)
  );

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === ISLAND) {
        queue.push([row, col]);
      }
    }
  }

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift();

      for (const [r, c] of directions) {
        const nextRow = row + r;
        const nextCol = col + c;
        if (
          nextRow < 0 ||
          nextRow >= grid.length ||
          nextCol < 0 ||
          nextCol >= grid.length ||
          visited[nextRow][nextCol] ||
          grid[nextRow][nextCol] === ISLAND
        ) {
          continue;
        }
        queue.push([nextRow, nextCol]);
        visited[row][col] = true;
      }
    }
    step += 1;
  }

  return step;
};

// where 0 represents water and 1 represents land,

// find a water cell such that its distance to the nearest land cell is maximized,

console.log(maxDistance([[1, 2]]));
