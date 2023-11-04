maxFrequency;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let s = 0;
  let res = 1;

  for (let r = 0; r < nums.length; r++) {
    s += nums[r];
    while ((r - l + 1) * nums[r] - s > k) {
      s -= nums[l];
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};

console.log(maxFrequency([3, 9, 6], 2));
// Input: nums = [1,2,4], k = 5

// 1 + 2 + 4 =>  7
