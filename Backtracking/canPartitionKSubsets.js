/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((curr, prev) => curr + prev, 0);
  const length = Math.floor(sum / k);
  if (length !== sum / k) {
    return false;
  }
  nums.sort((a, b) => b - a);
  const seen = new Array(nums.length).fill(0);

  const bt = (i, k, currSum) => {
    if (k === 0) {
      return true;
    }
    if (currSum === length) {
      return bt(0, k - 1, 0);
    }

    for (let j = i; j < nums.length; j++) {
      const newSum = currSum + nums[j];
      if (seen[j] || newSum > length) {
        continue;
      }
      seen[j] = true;
      if (bt(j + 1, k, newSum)) {
        return true;
      }
      seen[j] = false;
    }

    return false;
  };

  return bt(0, k, 0);
};
