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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // formula : currString.split('').join('->')
  const res = [];
  const dfs = (node, currStr) => {
    if (!node) {
      return;
    }
    const newString = currStr + String(node.val) + '->';
    dfs(node.left, newString);

    dfs(node.right, newString);

    if (!node.left && !node.right) {
      res.push(newString.slice(0, newString.length - 2));
    }
  };
  dfs(root, '');
  return res;
};
