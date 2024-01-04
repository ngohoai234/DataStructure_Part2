// 297. Serialize and Deserialize Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = [];

  const dfs = (node) => {
    if (!node) {
      res.push('N');
      return;
    }
    res.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);

  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const values = data.split(',');
  let i = 0;

  const dfs = () => {
    const value = values[i];

    if (value === 'N') {
      i += 1;
      return null;
    }

    const root = new TreeNode(Number(value));
    i += 1;

    root.left = dfs();
    root.right = dfs();

    return root;
  };

  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
