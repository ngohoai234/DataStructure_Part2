/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // red: 1, blue: -1, 0: not visited
  const colors = new Array(n + 1).fill(0).map(() => 0);
  const graph = new Array(n + 1).fill([]).map(() => []);

  //   build undirected graph

  for (const [u, v] of dislikes) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dfs = (source, color) => {
    if (colors[source] !== 0) {
      return colors[source] === color;
    }

    colors[source] = color; // mark already visited

    for (const nei of graph[source]) {
      if (!dfs(nei, -color)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < n + 1; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  return true;
};

console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
