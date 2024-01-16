import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
  // [time, weight, index]
  const avail = new MinPriorityQueue({
    compare: (a, b) => {
      return a[1] != b[1] ? a[1] - b[1] : a[2] - b[2];
    },
  });
  // time, w, i
  const busy = new MinPriorityQueue({
    compare: (a, b) => {
      return a[0] != b[0]
        ? a[0] - b[0]
        : a[1] != b[1]
        ? a[1] - b[1]
        : a[2] - b[2];
    },
  });
  const res = [];

  for (let i = 0; i < servers.length; i++) {
    avail.enqueue([0, servers[i], i]);
  }

  for (let t = 0; t < tasks.length; t++) {
    while (busy.size() && (busy.front()[0] <= t || avail.isEmpty())) {
      const [time, w, i] = busy.dequeue();
      avail.enqueue([time, w, i]);
    }
    const [time, w, i] = avail.dequeue();
    res.push(i);
    busy.enqueue([Math.max(time, t) + tasks[t], w, i]);
  }

  return res;
};

// the task in the front of the queue will be assigned to a free server with the smallest weight, and in case of a tie, it is assigned to a free server with the smallest index.

console.log(assignTasks([3, 3, 2], [1, 2, 3, 2, 1, 2]));
