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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    } else {
      while (queue.length) {
        node = queue.shift();

        if (node) {
          return false;
        }
      }
    }
  }
  return true;
};
