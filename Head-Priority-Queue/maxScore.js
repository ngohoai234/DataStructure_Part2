import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const pairs = nums1
    .map((n1, index) => {
      return [n1, nums2[index]];
    })
    .sort((a, b) => b[1] - a[1]);

  const minHeap = new MinPriorityQueue();
  let sum = 0;
  let res = 0;

  for (const [n1, n2] of pairs) {
    const top = minHeap.enqueue(n1).front().element;

    sum += n1;

    if (minHeap.size() > k) {
      sum -= top;
      minHeap.dequeue();
    }

    if (minHeap.size() === k) {
      res = Math.max(res, sum * n2);
    }
  }

  return res;
};

// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.

// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
