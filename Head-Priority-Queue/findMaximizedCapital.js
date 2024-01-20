import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from '@datastructures-js/priority-queue';

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  // [capital, profit]
  const minCapital = new MinPriorityQueue();
  const maxProfit = new MaxPriorityQueue();
  for (let i = 0; i < capital.length; i++) {
    minCapital.enqueue([capital[i], profits[i]], capital[i]);
  }

  for (let i = 0; i < k; i++) {
    while (minCapital.size() && minCapital.front().element[0] <= w) {
      const [c, p] = minCapital.dequeue().element;

      maxProfit.enqueue(p);
    }

    if (maxProfit.isEmpty()) {
      break;
    }

    w += maxProfit.dequeue().element;
  }

  return w;
};

// Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode

// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

// Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.
// awesome explanation

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
