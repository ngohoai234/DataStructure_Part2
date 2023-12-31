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
var sumNumbers = function (root) {
  const dfs = (node, currPath) => {
    if (!node) {
      return 0;
    }
    currPath = currPath * 10 + node.val;

    if (!node.left && !node.right) {
      return currPath;
    }

    const left = dfs(node.left, currPath);
    const right = dfs(node.right, currPath);

    return left + right;
  };

  return dfs(root, 0);
};
