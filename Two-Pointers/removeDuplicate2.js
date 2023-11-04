/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (res < 2 || nums[i] !== nums[res - 2]) {
      nums[res++] = nums[i];
    }
  }

  return res;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

// 1 1 1 2 2 3

// 1 1 2 2
