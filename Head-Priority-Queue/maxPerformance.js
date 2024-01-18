import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function (n, speed, efficiency, k) {
  const minHeap = new MinPriorityQueue();
  let res = 0;
  let currSpd = 0;
  const pairs = efficiency
    .map((data, index) => [data, speed[index]])
    .sort((a, b) => b[0] - a[0]);

  for (const [eff, spd] of pairs) {
    if (minHeap.size() === k) {
      currSpd -= minHeap.dequeue().element;
    }

    currSpd += spd;
    minHeap.enqueue(spd);
    res = Math.max(res, currSpd * eff);
  }

  return res % (10 ** 9 + 7);
};
