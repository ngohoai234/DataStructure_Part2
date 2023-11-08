/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] < nums[r]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return nums[l];
};

console.log(findMin([11, 13, 15, 17]));

// [11, 13, 15, 17]));

//  l       m  <  r

// 5 <= 3 => false => r = m
