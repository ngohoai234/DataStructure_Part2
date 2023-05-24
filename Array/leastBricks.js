/**
 * @param {number[][]} wall
 * @return {number}
 */

// when has brute force solution please think about hash map
// instead linear solution should think about tricky solution
const leastBricks = function (wall) {
  // key => current column
  // value: gap
  const gaps = new Map();
  const rows = wall.length;
  let max = 0;
  let maxColumn = 0;

  for (let row = 0; row < wall.length; row++) {
    let currentColumn = 0;
    for (let column = 0; column < wall[row].length; column++) {
      currentColumn += wall[row][column];
      const previousGap = gaps.get(currentColumn) || 0;
      gaps.set(currentColumn, previousGap + 1);
    }
    maxColumn = Math.max(maxColumn, currentColumn);
  }
  //   remove the last gaps
  gaps.delete(maxColumn);
  max = Math.max(...[...gaps.values()]);
  return rows - (max === -Infinity ? 0 : max);
};

console.log(leastBricks([[1], [1], [1]]));
