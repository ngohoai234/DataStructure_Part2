/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let maxRow = 0;
  let maxCol = 0;

  for (const [u, v] of stones) {
    maxRow = Math.max(maxRow, u);
    maxCol = Math.max(maxCol, v);
  }

  const parent = new Array(maxRow + maxCol + 1).fill(0).map((_, idx) => idx);
  const rank = new Array(maxRow + maxCol + 1).fill(1).map(() => 1);
  const seen = new Set();

  //   create union-find
  const find = (n) => {
    let p = parent[n];

    while (p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }

    return p;
  };

  const union = (u1, u2) => {
    debugger;
    const p1 = find(u1);
    const p2 = find(u2);

    if (p1 === p2) {
      return false;
    }

    if (rank[p1] > rank[p2]) {
      parent[p2] = p1;
      rank[p1] += 1;
    } else {
      parent[p1] = p2;
      rank[p2] += 1;
    }

    return true;
  };

  for (const [u, v] of stones) {
    const row = u;
    const col = v + maxRow + 1;
    union(row, col);
  }

  for (const [u, v] of stones) {
    seen.add(find(u));
  }

  return stones.length - seen.size;
};

// x 0 x 0
// 0 0 0 x
// 0 0 0 0
// x 0 x 0
// 0 0 0 x
// -> ans = 4

console.log(
  removeStones([
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
  ])
);
