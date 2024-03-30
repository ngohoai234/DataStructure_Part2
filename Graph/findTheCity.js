/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const graph = new Array(n)
    .fill([])
    .map(() => new Array(n).fill(Infinity).map(() => Infinity));
  let smallest = n;
  let res = 0;

  for (const [u, v, w] of edges) {
    graph[u][v] = w;
    graph[v][u] = w;
  }

  for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
  }

  // floy warshall
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  console.log(graph);

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; ++j) {
      debugger;
      if (graph[i][j] <= distanceThreshold) {
        count++;
      }
    }
    if (count <= smallest) {
      res = i;
      smallest = count;
    }
  }

  return res;
};

// floy warshall

console.log(
  findTheCity(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1],
    ],
    2
  )
);
