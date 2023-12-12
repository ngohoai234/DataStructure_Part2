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
var invertTree = function (root) {
  const dfs = (node) => {
    if (!node) {
      return null;
    }

    const left = invertTree(node.left);
    const right = invertTree(node.right);

    root.left = right;
    root.right = left;
  };

  dfs(root);

  return root;
};
