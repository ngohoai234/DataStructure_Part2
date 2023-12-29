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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const dfs = (node, maxLeft, maxRight) => {
    if (node.val <= maxLeft || node.val >= maxRight) {
      return false;
    }

    if (node.left) {
      if (!dfs(node.left, maxLeft, node.val)) {
        return false;
      }
    }

    if (node.right) {
      if (!dfs(node.right, node.val, maxRight)) {
        return false;
      }
    }

    return true;
  };

  return dfs(root, -Infinity, Infinity);
};
