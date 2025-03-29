/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i - 1] = dp[i - 2] + dp[i - 3];
  }

  return dp[n - 1];
};

console.log(climbStairs(4));
