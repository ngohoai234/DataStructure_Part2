// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let res = 0;
  let contiguous = 0;
  nums.forEach((num) => {
    if (num === 0) {
      debugger;
      contiguous++;
    } else {
      res += (contiguous * (contiguous + 1)) / 2;
      contiguous = 0;
    }
  });

  if (contiguous !== 0) {
    res += (contiguous * (contiguous + 1)) / 2;
  }

  return res;
};

console.log(zeroFilledSubarray([2, 10, 2019]));
