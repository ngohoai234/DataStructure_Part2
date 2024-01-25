// 473. Matchsticks to Square

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const sum = matchsticks.reduce((total, curr) => total + curr, 0);
  const length = Math.floor(sum / 4);
  const sides = new Array(4).fill(0);
  if (sum / 4 !== length) {
    return false;
  }

  matchsticks.sort((a, b) => b - a);
  const bt = (i) => {
    if (i === matchsticks.length) {
      return true;
    }

    // four sides
    for (let j = 0; j < 4; j++) {
      if (sides[j] + matchsticks[i] <= length) {
        sides[j] += matchsticks[i];
        if (bt(i + 1)) {
          return true;
        }
        1;
        sides[j] -= matchsticks[i];
      }
    }
    return false;
  };

  return bt(0);
};

// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick.

console.log(makesquare([1, 1, 2, 2, 2]));
