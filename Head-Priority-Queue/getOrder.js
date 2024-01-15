import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  // [enqueueTimei, processingTimei, ith]

  for (let i = 0; i < tasks.length; i++) {
    tasks[i].push(i);
  }
  tasks.sort((a, b) => a[0] - b[0]);

  const minHeap = new MinPriorityQueue({
    compare: (e1, e2) => {
      if (e1[1] === e2[1]) return e1[2] - e2[2];
      return e1[1] - e2[1];
    },
  });
  const res = [];

  let currTime = tasks[0][0];
  let i = 0;

  while (minHeap.size() || i < tasks.length) {
    while (i < tasks.length && currTime >= tasks[i][0]) {
      minHeap.enqueue(tasks[i], tasks[i][1]);
      i++;
    }

    if (minHeap.size()) {
      const top = minHeap.dequeue();
      currTime += top[1];
      res.push(top[2]);
    } else {
      currTime = tasks[i][0];
    }
  }

  return res;
};

// where tasks[i] = [enqueueTimei, processingTimei]

// means that the i​​​​​​th​​​​ task will be available to process at enqueueTimei and will take processingTimei to finish processing.

// You have a single-threaded CPU that can process at most one task at a time and will act in the following way:

// If the CPU is idle and there are no available tasks to process, the CPU remains idle.
