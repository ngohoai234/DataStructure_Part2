// 513. Find Bottom Left Tree Value

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
var findBottomLeftValue = function (root) {
  const dfs = (node, level, res) => {
    if (res[1] < level) {
      res[0] = node.val;
      res[1] = level;
    }

    if (node.left) {
      dfs(node.left, level + 1, res);
    }

    if (node.right) {
      dfs(node.right, level + 1, res);
    }

    return res[0];
  };

  return dfs(root, 0, [-1, -1]);
};
