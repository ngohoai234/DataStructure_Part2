import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  this.graph = new Array(n).fill(0).map(() => []);
  for (const [u, v, w] of edges) {
    this.graph[u].push([v, w]);
  }
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  const [u, v, w] = edge;
  this.graph[u].push([v, w]);
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  const n = this.graph.length;
  const pq = new MinPriorityQueue();
  const dist = new Array(n).fill(0).map(() => Infinity);
  dist[node1] = 0;
  pq.enqueue([0, node1], 0);

  while (pq.size()) {
    const [distance, node] = pq.dequeue().element;
    if (node === node2) {
      return distance;
    }
    if (distance > dist[node]) {
      continue;
    }
    for (const [v, w] of this.graph[node]) {
      const newDistance = distance + w;
      if (newDistance < dist[v]) {
        dist[v] = newDistance;
        pq.enqueue([newDistance, v], newDistance);
      }
    }
  }

  return -1;
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
