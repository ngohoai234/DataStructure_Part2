/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (num >= 1 && num <= n) {
      if (nums[num - 1] > 0) {
        nums[num - 1] *= -1;
      } else if (nums[num - 1] === 0) {
        nums[num - 1] = -1 * n;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }

  return n + 1;
};

console.log(firstMissingPositive([3, -3, 2, 3]));
