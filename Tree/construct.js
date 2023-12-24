// Definition for a QuadTree node.
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const dfs = (grid, x, y, len) => {
    if (len === 1) {
      return new Node(grid[x][y], true, null, null, null, null);
    }
    const divide = Math.floor(len / 2);

    const result = new Node();

    const topLeft = dfs(grid, x, y, divide);
    const topRight = dfs(grid, x, y + divide, divide);
    const bottomLeft = dfs(grid, x + divide, y, divide);
    const bottomRight = dfs(grid, x + divide, y + divide, divide);

    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      result.val = topLeft.val;
      result.isLeaf = true;
    } else {
      result.topLeft = topLeft;
      result.topRight = topRight;
      result.bottomLeft = bottomLeft;
      result.bottomRight = bottomRight;
    }

    return result;
  };

  return dfs(grid, 0, 0, grid.length);
};

console.log(
  construct([
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
  ])
);
