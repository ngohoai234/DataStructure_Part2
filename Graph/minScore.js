// dfs
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const graph = Array.from({ length: n + 1 }).map(() => []);
  const visited = new Set();
  let res = Infinity;
  debugger;

  for (const [u, v, weight] of roads) {
    graph[u].push([v, weight]);
    graph[v].push([u, weight]);
  }

  const dfs = (source) => {
    if (visited.has(source)) {
      return;
    }
    visited.add(source);

    for (const [nei, weight] of graph[source]) {
      res = Math.min(res, weight);
      dfs(nei);
    }
  };

  dfs(1);
  return res;
};

console.log(
  minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ])
);
