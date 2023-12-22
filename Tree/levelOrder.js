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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const res = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length;
    const currLevel = [];

    while (length > 0) {
      const node = queue.shift();
      if (node) {
        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }

        currLevel.push(node.val);
      }
      length -= 1;
    }

    res.push(currLevel);
  }

  return res;
};
