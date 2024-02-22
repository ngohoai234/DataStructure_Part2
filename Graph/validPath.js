// dfs
/**
 * @param {number} n
 * @param {n
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = new Array(n).fill([]).map(() => []);
  const visited = new Set();
  // build graph

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  // dfs: source to destination
  const dfs = (source) => {
    if (source === destination) {
      return true;
    }
    visited.add(source);

    for (const nei of graph[source]) {
      if (visited.has(nei)) {
        continue;
      }
      if (dfs(nei)) {
        return true;
      }
    }
    return false;
  };

  return dfs(source);
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
