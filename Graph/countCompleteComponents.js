/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  const visited = new Set();
  let res = 0;
  const graph = new Array(n).fill(0).map(() => []);
  let nodeCount = 0;
  let edgesCount = 0;

  const dfs = (current) => {
    if (visited.has(current)) {
      return;
    }
    visited.add(current);
    nodeCount += 1;
    edgesCount += graph[current].length;

    for (const adjacent of graph[current]) {
      dfs(adjacent);
    }
  };

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      nodeCount = 0;
      edgesCount = 0;
      dfs(i);

      if (edgesCount === nodeCount * (nodeCount - 1)) {
        res += 1;
      }
    }
  }

  return res;
};

// node -> edges
// 1 -> 1
// 2 -> 2
// 3 -> 6
// 4 -> 12

// formula:  (n * ( n - 1))

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ])
);
