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
var goodNodes = function (root) {
  const dfs = (node, max) => {
    if (!node) {
      return 0;
    }
    let res = node.val >= max ? 1 : 0;
    max = Math.max(max, node.val);

    res += dfs(node.left, max);
    res += dfs(node.right, max);

    return res;
  };

  return dfs(root, root.val);
};
