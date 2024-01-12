// 1675. Minimize Deviation in Array
import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
  let res = Infinity;
  let min = Infinity;
  const maxHeap = new MaxPriorityQueue();
  for (const n of nums) {
    const transformNumber = n % 2 ? n * 2 : n;

    maxHeap.enqueue(transformNumber);
    min = Math.min(min, transformNumber);
  }
  while (maxHeap.front().element % 2 === 0) {
    const top = maxHeap.dequeue().element;
    res = Math.min(res, top - min);
    min = Math.min(min, top / 2);
    maxHeap.enqueue(top / 2);
  }

  return Math.min(res, maxHeap.front().element - min);
};

// We have two types of operations: double odd numbers, and halve even numbers. We can try to sort all numbers, and increase the smallest number (if it's odd) and decrease the largest number (if it's even). This can get quite complicated.

// Intuition 1: we can divide even numbers multiple times - till we get an odd number, but we can only double odd numbers once. After that, it will become an even number.

// Intuition 2: Even numbers never increase.

// Flip: we can double all odd numbers first, so we can get forget of the second operation. Now, we only need to decrease the largest number - while it's even, which results a very simple solution.

// Solution
// Double odd numbers and put all numbers into a max heap. Track the smallest number. Track the minimum difference between the top of the heap and the smallest number. While the top of the heap is even, remove it, divide, and put back to the heap.

// Two solutions below use the same approach; the first one is easier to read, and the second one - faster (since we use the array version of max heap).
