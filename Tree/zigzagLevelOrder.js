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
var zigzagLevelOrder = function (root) {
  const queue = root ? [root] : [];
  const res = [];

  while (queue.length) {
    const row = [...new Array().fill(0)];
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      const index = res.length % 2 === 0 ? i : length - i - 1;

      row[index] = node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(row);
  }

  return res;
};
