// 77. Combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const backtracking = (start, subset) => {
    if (subset.length === k) {
      res.push([...subset]);
      return;
    }
    if (subset.length === k) {
      return;
    }
    for (let i = start; i <= n; i++) {
      subset.push(i);
      backtracking(i + 1, subset);
      subset.pop();
    }
  };

  backtracking(1, []);

  return res;
};

console.log(combine(4, 2));
