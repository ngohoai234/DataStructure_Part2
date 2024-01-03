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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let curSum = 0;

  const dfs = (node) => {
    if (!node) {
      return null;
    }
    dfs(node.right);
    curSum += node.val;
    node.val = curSum;
    dfs(node.left);

    return node;
  };

  return dfs(root);
};
