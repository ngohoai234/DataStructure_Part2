/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (
      (m - 1 < 0 || nums[m - 1] !== nums[m]) &&
      (m === nums.length || nums[m + 1] !== nums[m])
    ) {
      return nums[m];
    }
    // get the remain size
    let leftSize = nums[m - 1] === nums[m] ? m - 1 : m;

    if (leftSize) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};

// 1 1 2 3 3 4 4

// input: given sorted array

// output: return the single element that appear only once

// Must be : O(log n) and O(1) space

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4]));
