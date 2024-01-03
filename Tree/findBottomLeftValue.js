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
  const queue = [root];

  let res = root.val;

  while (queue.length) {
    let length = queue.length;

    while (length) {
      const currNode = queue.shift();
      if (currNode.right) {
        queue.push(currNode.right);
      }

      if (currNode.left) {
        queue.push(currNode.left);
      }

      res = currNode ? currNode.val : null;
      length -= 1;
    }
  }

  return res;
};
