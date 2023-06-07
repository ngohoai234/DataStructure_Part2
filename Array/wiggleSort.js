/**
 *
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

/**
 *
 * @param {number[]} nums
 *
 * @returns {number[]}
 */

const wiggleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (
      (i % 2 === 1 && nums[i] < nums[i - 1]) ||
      (i % 2 === 0 && nums[i] > nums[i - 1])
    ) {
      swap(nums, i, i - 1);
    }
  }

  return nums;
};

console.log(wiggleSort([1, 2, 3, 4]));
