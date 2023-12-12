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
 * @return {number}
 */
var maxDepth = function (root) {
  const dfs = (node, count) => {
    if (!node) {
      return count;
    }
    const plusCount = count + 1;
    return Math.max(dfs(node.left, plusCount), dfs(node.right, plusCount));
  };

  return dfs(root, 0);
};
