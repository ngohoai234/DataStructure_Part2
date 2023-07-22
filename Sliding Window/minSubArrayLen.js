/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let s = 0;
  let res = Infinity;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    s += nums[r];
    while (s >= target) {
      res = Math.min(res, r - l + 1);
      s -= nums[l++];
    }
  }
  return res === Infinity ? 0 : res;
};

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));

//  3 + 1 + 2 > 7
//
