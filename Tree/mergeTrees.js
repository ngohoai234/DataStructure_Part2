/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const dfs = (p, q) => {
    if (p === null && q === null) {
      return null;
    }

    if (p === null) {
      return q;
    }

    if (q === null) {
      return p;
    }

    const root = new TreeNode(p.val + q.val);

    root.left = dfs(p.left, q.left);
    root.right = dfs(p.right, q.right);

    return root;
  };

  return dfs(root1, root2);
};
