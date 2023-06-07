/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const remainder = new Map();
  let total = 0;

  remainder.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    const currentRemainder = total % k;
    if (!remainder.has(currentRemainder)) {
      remainder.set(currentRemainder, i);
    }

    if (
      remainder.has(currentRemainder) &&
      i - remainder.get(currentRemainder) > 1
    ) {
      return true;
    }
  }

  return false;
};

console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
