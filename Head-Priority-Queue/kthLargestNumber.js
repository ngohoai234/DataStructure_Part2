import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  return `${
    nums.map((x) => BigInt(x)).sort((a, b) => (a < b ? 1 : -1))[k - 1]
  }`;
};
