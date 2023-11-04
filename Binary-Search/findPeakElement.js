/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (m > 0 && nums[m] < nums[m - 1]) {
      r = m - 1;
    } else if (m < nums.length - 1 && nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      return m;
    }
  }
};

// 1 2 3 4 5
// l   m   r
// peek

// 5 4 3 2 1
// l   m   r

console.log(findPeakElement([1, 2, 3, 1]));
