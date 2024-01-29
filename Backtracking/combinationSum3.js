/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const subset = [];
  const dfs = (start, curr) => {
    if (subset.length === k && curr === n) {
      res.push([...subset]);
      return;
    }

    // out of the scope
    if (start > 9 || subset.length > k || curr > n) {
      return;
    }

    // find the next number with current number
    subset.push(start);
    dfs(start + 1, curr + start);
    // find the number without the current number
    subset.pop();
    dfs(start + 1, curr);
  };

  dfs(1, 0);
  return res;
};

console.log(combinationSum3(3, 7));
