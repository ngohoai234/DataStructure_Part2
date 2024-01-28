/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const res = [];
  const characters = ['a', 'b', 'c'];

  const backtracking = (curr) => {
    if (curr.length === n) {
      res.push(curr);
      return;
    }
    for (const ch of characters) {
      if (curr.length === 0 || (curr.length && curr[curr.length - 1] !== ch)) {
        backtracking(curr + ch);
      }
    }
  };
  backtracking('');

  return res.length >= k ? res[k - 1] : '';
};

console.log(getHappyString(3, 9));
