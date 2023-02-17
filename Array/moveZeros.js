// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const nums = [0, 1, 0, 3, 12];

const moveZeroes = function (nums) {
  let j = 0;
  for (const n of nums) {
    if (n !== 0) {
      nums[j] = n;
      j++;
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};

console.log(moveZeroes(nums));
