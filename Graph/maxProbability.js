import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  const graph = new Array(n).fill(0).map(() => []);
  const pq = new MaxPriorityQueue();
  const dist = new Array(n).fill(0).map(() => -Infinity);

  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    const w = succProb[i];
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  dist[start_node] = 1;
  pq.enqueue([1, start_node], 1);
  while (pq.size() > 0) {
    const [distance, node] = pq.dequeue().element;

    if (node === end_node) {
      return distance;
    }

    for (const [v, d] of graph[node]) {
      const newDistance = distance * d;
      if (newDistance > dist[v]) {
        dist[v] = newDistance;
        pq.enqueue([newDistance, v], newDistance);
      }
    }
  }

  return 0;
};

console.log(
  maxProbability(
    5,
    [
      [1, 4],
      [2, 4],
      [0, 4],
      [0, 3],
      [0, 2],
      [2, 3],
    ],
    [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
    3,
    4
  )
);
