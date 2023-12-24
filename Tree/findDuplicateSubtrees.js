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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const count = new Map();
  const res = [];
  const dfs = (node) => {
    if (!node) {
      return 'null';
    }
    const s = [node.val, dfs(node.left), dfs(node.right)].join(',');

    const prevCount = count.get(s) ?? 0;
    if (prevCount === 1) {
      res.push(node);
    }
    count.set(s, prevCount + 1);

    return s;
  };

  dfs(root);

  return res;
};
