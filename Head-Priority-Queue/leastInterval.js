// 621. Task Scheduler

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 *
 * @param {string[]} tasks
 * @returns {number[]}
 */
var getFrequencyMap = (tasks) => {
  const countMap = new Array(26).fill(0);

  for (const task of tasks) {
    const index = task.charCodeAt() - 'A'.charCodeAt();

    countMap[index] += 1;
  }

  return countMap;
};

/**
 * @param {number[]} frequencyMap
 */
var getMaxHeap = (frequencyMap) => {
  const maxHeap = new MaxPriorityQueue();
  for (const frequency of frequencyMap) {
    if (frequency) {
      maxHeap.enqueue(frequency);
    }
  }

  return maxHeap;
};

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const frequencyMap = getFrequencyMap(tasks);
  const maxHeap = getMaxHeap(frequencyMap);

  let times = 0;

  // pair of [cnt, idletime]
  const queue = [];

  while (queue.length || !maxHeap.isEmpty()) {
    times += 1;

    if (!maxHeap.isEmpty()) {
      const cnt = maxHeap.dequeue().element - 1;

      if (cnt > 0) {
        queue.push([cnt, times + n]);
      }
    }

    if (queue.length && queue[0][1] === times) {
      maxHeap.enqueue(queue.shift()[0]);
    }
  }

  return times;
};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2));
