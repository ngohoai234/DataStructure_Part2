const EXCLUDE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const res = [];

  const backtracking = (i, curr) => {
    if (i === s.length) {
      res.push(curr);
      return;
    }
    if (EXCLUDE.includes(s[i])) {
      backtracking(i + 1, curr + s[i]);
    } else {
      // branch lower
      backtracking(i + 1, curr + s[i].toLowerCase());
      // branch upper
      backtracking(i + 1, curr + s[i].toUpperCase());
    }
  };

  backtracking(0, '');
  return res;
};

console.log(letterCasePermutation('a1b2'));
