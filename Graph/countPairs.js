/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  // form common formula used in combinatorics and discrete mathematics. -> (n * (n - 1)) / 2

  let res = (n * (n - 1)) / 2;
  const graph = [...Array(n)].map(() => []);
  const visited = new Set();

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dfs = (i) => {
    visited.add(i);
    let cnt = 1;
    for (const nei of graph[i]) {
      if (!visited.has(nei)) {
        cnt += dfs(nei, cnt);
      }
    }

    return cnt;
  };

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      let cnt = dfs(i, 0);
      res -= (cnt * (cnt - 1)) / 2;
    }
  }

  return res;
};

console.log(
  countPairs(7, [
    [0, 2],
    [0, 5],
    [2, 4],
    [1, 6],
    [5, 4],
  ])
);
