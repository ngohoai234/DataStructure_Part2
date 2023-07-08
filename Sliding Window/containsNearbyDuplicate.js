/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen.has(num)) {
      const index = seen.get(num);
      if (i - index <= k) {
        return true;
      }
    }
    seen.set(num, i);
  }
  return false;
};

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// i - j <= k => can't sort
// i !== j && nums[i] === nums[j]

console.log(containsNearbyDuplicate([1, 2, 3, 1], 1));
