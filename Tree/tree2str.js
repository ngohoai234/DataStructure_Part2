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
 * @return {string}
 */
var tree2str = function (root) {
  const res = [];

  const preorder = (node) => {
    if (!node) {
      return '';
    }
    res.push('(', String(node.val));

    if (!node.left && node.right) {
      res.push('(', ')');
    }

    preorder(node.left);
    preorder(node.right);

    res.push(')');
  };
  preorder(root);
  return res.join('').slice(1, -1);
};
