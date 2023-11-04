// input: integer x

// output: return the square root of x rounded down to nearest integer

// example:
// x = 8

// => 2

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 1,
    r = x;
  res = 0;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    const square = m ** 2;
    if (square === x) {
      return m;
    } else if (square > x) {
      r = m - 1;
    } else {
      res = m;
      l = m + 1;
    }
  }
  return res;
};

console.log(mySqrt(0));
