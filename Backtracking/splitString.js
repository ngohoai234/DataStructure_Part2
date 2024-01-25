// 1849. Splitting a String Into Descending Consecutive Values

/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  const bt = (i, prev) => {
    if (i === s.length) {
      return true;
    }

    for (let j = i; j < s.length; j++) {
      const curr = Number(s.slice(i, j + 1));
      if (curr + 1 === prev && bt(j + 1, curr)) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < s.length - 1; i++) {
    const prev = Number(s.slice(0, i + 1));
    debugger;
    if (bt(i + 1, Number(prev))) {
      return true;
    }
  }

  return false;
};

// You are given a string s that consists of only digits.

//  the numerical values of the substrings are in descending order
//  the difference between numerical values of every two adjacent substrings is equal to

console.log(splitString('1234'));
