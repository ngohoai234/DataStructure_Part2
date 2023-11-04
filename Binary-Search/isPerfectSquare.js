// input: integer num

// output: true if perfect square, false otherwise

// idea: binary search

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 1,
    r = num;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const square = m ** 2;
    if (square === num) {
      return true;
    } else if (square > num) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(14));
