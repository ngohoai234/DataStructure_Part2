/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }

  const visited = new Set();
  const graph = new Array(n).fill(0).map(() => []);
  let res = 0;

  const dfs = (curr) => {
    visited.add(curr);

    for (const adj of graph[curr]) {
      if (!visited.has(adj)) {
        dfs(adj);
      }
    }
  };

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      res += 1;
    }
  }

  return res - 1;
};
