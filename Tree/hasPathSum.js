/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const dfs = (node, currSum) => {
    if (node === null) {
      return false;
    }
    currSum += node.val;

    if (node.left === null && node.right === null) {
      return currSum === targetSum;
    }

    return dfs(node.left, currSum) || dfs(node.right, currSum);
  };

  return dfs(root, 0);
};
