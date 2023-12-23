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
var minDiffInBST = function (root) {
  let prev = null,
    res = Infinity;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    dfs(node.left);

    if (prev) {
      res = Math.min(res, node.val - prev.val);
    }

    prev = node;

    dfs(node.right);
  };

  dfs(root);

  return res === Infinity ? 0 : res;
};
