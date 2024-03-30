/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  // topological sort
  const graph = new Array(n).fill(0).map(() => []);
  const res = new Array(n).fill(0).map(() => []);

  const dfs = (i, j, visited) => {
    visited.add(j);
    for (const nei of graph[j]) {
      if (!visited.has(nei)) {
        res[nei].push(i);
        dfs(i, nei, visited);
      }
    }
  };

  for (const [u, v] of edges) {
    graph[u].push(v);
  }

  for (let i = 0; i < n; i++) {
    const visited = new Set();
    dfs(i, i, visited);
  }

  return res;
};

console.log(
  getAncestors(8, [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ])
);
