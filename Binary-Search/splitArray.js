/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let l = Math.max(...nums);
  let r = nums.reduce((sum, data) => sum + data, 0);

  const isValid = (max) => {
    let currentMax = max;
    let c = 0;

    for (let i = 0; i < nums.length; i++) {
      if (currentMax - nums[i] < 0) {
        c += 1;
        currentMax = max;
      }
      currentMax -= nums[i];
    }

    return c === k || (c < k && currentMax > 0);
  };

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (isValid(m)) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
