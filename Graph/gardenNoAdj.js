/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const graph = new Array(n).fill(0).map(() => []);
  const res = new Array(n).fill(0).map(() => 0);

  for (const [u, v] of paths) {
    graph[u - 1].push(v - 1);
    graph[v - 1].push(u - 1);
  }

  for (let i = 0; i < n; i++) {
    const used = new Array(5).fill(0).map(() => 0);

    for (const j of graph[i]) {
      used[res[j]] = 1;
    }
    for (let k = 1; k <= 4; k++) {
      if (used[k] === 0) {
        res[i] = k;
        break;
      }
    }
  }

  return res;
};

console.log(
  gardenNoAdj(4, [
    [1, 2],
    [3, 4],
  ])
);
