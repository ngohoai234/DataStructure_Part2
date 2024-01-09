import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// Calculate and return the squared Euclidean distance
const squaredDistance = ([x, y]) => x ** 2 + y ** 2;

// 973. K Closest Points to Origin

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const minHeap = new MinPriorityQueue();

  const res = [];

  for (const point of points) {
    const distance = squaredDistance(point);
    minHeap.enqueue(point, distance);
  }

  while (k > 0) {
    res.push(minHeap.dequeue().element);
    k -= 1;
  }

  return res;
};

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
