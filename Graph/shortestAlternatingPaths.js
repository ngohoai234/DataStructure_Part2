/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const graph = Array.from({ length: n }).map(() => []);

  const res = Array.from({ length: n }).map(() => -1);
  let step = 0;
  const visited = new Set();

  //   build graph
  for (const [u, v] of redEdges) {
    graph[u].push([v, 1]);
  }

  for (const [u, v] of blueEdges) {
    graph[u].push([v, 2]);
  }

  //   [node, color]
  const queue = [[0, -1]];
  visited.add(`${0}_-1`);

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const [node, color] = queue.shift();

      if (res[node] === -1) {
        res[node] = step;
      }

      for (const [newNode, newColor] of graph[node]) {
        if (visited.has(`${newNode}_${newColor}`) || newColor === color) {
          continue;
        }
        queue.push([newNode, newColor]);
        visited.add(`${newNode}_${newColor}`);
      }
    }
    step++;
  }

  return res;
};

console.log(
  shortestAlternatingPaths(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    []
  )
);
