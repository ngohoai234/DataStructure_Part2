/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const visited = new Set();
  let count = 0;

  const graph = new Array(n).fill(0).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  for (const u of restricted) {
    visited.add(u);
  }

  const dfs = (source) => {
    visited.add(source);
    count++;

    for (const nei of graph[source]) {
      if (!visited.has(nei)) {
        dfs(nei);
      }
    }
  };

  dfs(0);

  return count;
};
