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
var postorderTraversal = function (root) {
  const stack = [root];
  const visited = [false];
  const res = [];

  while (stack.length) {
    const isVisited = visited.pop();
    const curr = stack.pop();

    if (curr) {
      if (isVisited) {
        res.push(curr.val);
      } else {
        stack.push(curr);
        visited.push(true);
        stack.push(curr.right);
        visited.push(false);
        stack.push(curr.left);
        visited.push(false);
      }
    }
  }

  return res;
};
