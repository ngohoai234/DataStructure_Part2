/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const graph = new Array(n).fill(0).map(() => new Set());
  let max = 0;

  for (const [u, v] of roads) {
    graph[u].add(v);
    graph[v].add(u);
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let ranks = graph[i].size + graph[j].size;
      if (graph[i].has(j) || graph[j].has(i)) {
        ranks -= 1;
      }
      max = Math.max(max, ranks);
    }
  }

  return max;
};
