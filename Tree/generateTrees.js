/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const generate = (left, right) => {
    if (left === right) {
      return [new TreeNode(left)];
    }
    if (left > right) {
      return [null];
    }

    const res = [];

    for (let val = left; val < right + 1; val++) {
      // generate all nodes in the left
      const l = generate(left, val - 1);
      // generate all nodes in the right
      const r = generate(val + 1, right);

      for (const leftTree of l) {
        for (const rightTree of r) {
          const root = new TreeNode(val, leftTree, rightTree);

          res.push(root);
        }
      }
    }

    return res;
  };

  return generate(1, n);
};

console.log(generateTrees(3));
