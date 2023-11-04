function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 *
 * @param {TreeNode} root
 * @return {TreeNode | null}
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (root === null) {
    return null;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.left || root.right || root.val) {
    return root;
  }
  return null;
};
