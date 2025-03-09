/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  /**
   *
   * @param {string} s
   * @param {number} l
   * @param {number} r
   * @param {number} n
   */
  const dfs = (s, l, r, n) => {
    // base case
    if (s.length === n * 2) {
      res.push(s);
      return;
    }

    if (l < n) {
      dfs(s + '(', l + 1, r, n);
    }

    if (r < l) {
      dfs(s + ')', l, r + 1, n);
    }
  };

  dfs('', 0, 0, n);

  return res;
};

console.log(generateParenthesis(1));
