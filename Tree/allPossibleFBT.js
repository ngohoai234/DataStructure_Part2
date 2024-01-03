/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}7
 */
var allPossibleFBT = function (n) {
  const res = [];
  const map = new Map();

  if (n % 2 === 0) {
    return res;
  }

  if (n === 1) {
    return [new TreeNode(0)];
  }

  if (map.has(n)) {
    return map.get(n);
  }

  for (let i = 1; i < n; i += 2) {
    const j = n - i - 1;
    const allLeft = allPossibleFBT(i);
    const allRight = allPossibleFBT(j);

    for (const l of allLeft) {
      for (const r of allRight) {
        const root = new TreeNode(0, l, r);
        res.push(root);
        map.set(n, root);
      }
    }
  }

  return res;
};
