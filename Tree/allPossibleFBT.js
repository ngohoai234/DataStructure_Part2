/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}7
 */
var allPossibleFBT = function (n) {
  const dp = [];

  for (let i = 1; i <= n; i++) {
    dp[i] = [];
  }
  debugger;

  dp[1] = [new TreeNode(0)];

  for (let count = 3; count <= n; count += 2) {
    for (let i = 1; i < count - 1; i += 2) {
      // 0 0 0
      // if we select the second is the root node then

      // we only has one from the left and one from the right
      // 0 | 0

      // -> the total node 1 | 1

      const j = count - i - 1;

      const left = dp[i];
      const right = dp[j];

      for (const l of left) {
        for (const r of right) {
          const root = new TreeNode(0, l, r);
          dp[count].push(root);
        }
      }
    }
  }

  return dp[n];
};
