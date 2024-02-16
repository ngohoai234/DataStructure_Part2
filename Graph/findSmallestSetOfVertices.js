/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const graph = new Array(n).fill([]).map(() => []);
  const res = [];

  for (const [u, v] of edges) {
    graph[v].push(u);
  }

  for (let i = 0; i < n; i++) {
    if (graph[i].length === 0) {
      res.push(i);
    }
  }
  return res;
};

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);
