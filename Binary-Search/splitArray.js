/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let l = Math.max(...nums);
  let r = nums.reduce((sum, n) => sum + n, 0);
  let res = r;

  const canSplit = (maxSum) => {
    let sub = 1;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];

      if (currentSum > maxSum) {
        currentSum = nums[i];
        sub += 1;
      }
    }

    // why not to be equal
    // because when sub <= k we can split more times
    return sub <= k;
  };
  debugger;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (canSplit(m)) {
      r = m - 1;
      res = m;
    } else {
      l = m + 1;
    }
  }
  return res;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
