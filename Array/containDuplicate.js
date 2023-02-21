// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1, 2, 3, 1];
// Output: true;
const containsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};

console.log(containsDuplicate([[1, 2, 3, 4]]));
