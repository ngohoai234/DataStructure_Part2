// 17. Letter Combinations of a Phone Number

const phoneButtons = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }
  const res = [];
  const bt = (currString, i) => {
    if (currString.length >= digits.length) {
      res.push(currString);
      return;
    }
    const letters = phoneButtons[digits[i]];

    for (const char of letters) {
      bt(currString + char, i + 1);
    }
  };

  bt('', 0);
  return res;
};
