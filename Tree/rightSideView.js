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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];

  const dfs = (node, currLevel) => {
    if (!node) {
      return null;
    }

    if (res.length <= currLevel) {
      res.push(node.val);
    }

    dfs(node.right, currLevel + 1);
    dfs(node.left, currLevel + 1);
  };

  dfs(root, 0);

  return res;
};
