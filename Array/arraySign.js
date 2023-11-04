/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function (nums) {
  // there is a function signFunc(x) that returns:
  //    1 if x is positive.
  //    -1 if x is negative.
  //    0 if x is equal to 0.

  let sign = 1;

  for (const num of nums) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      sign *= -1;
    }
  }
  return sign;
};
