import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

// max heap solution

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//   const maxHeap = new MaxPriorityQueue();

//   for (const num of nums) {
//     maxHeap.enqueue(num);
//   }

//   let res = 0;
//   while (k > 0) {
//     res = maxHeap.dequeue().element;
//     k -= 1;
//   }

//   return res;
// };

var findKthLargest = function (nums, k) {
  const position = nums.length - k;

  const quickSelect = (l, r) => {
    const pivot = nums[r];
    let p = l;

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p += 1;
      }
    }

    [nums[r], nums[p]] = [nums[p], nums[r]];

    // in that case we need to restrict the size to find
    if (p > position) {
      return quickSelect(l, p - 1);
    } else if (p < position) {
      return quickSelect(p + 1, r);
    } else {
      return nums[p];
    }
  };

  return quickSelect(0, nums.length - 1);
};

// Idea quick select :

//  -> the half left is smaller the pivot

//  -> the half right is larger the pivot
