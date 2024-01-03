// 669. Trim a Binary Search Tree

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  const dfs = (node, low, high) => {
    if (!node) {
      return null;
    }

    if (node.val < low) {
      return dfs(node.right, low, high);
    }

    if (node.val > high) {
      return dfs(node.left, low, high);
    }

    node.left = trimBST(node.left, low, high);
    node.right = trimBST(node.right, low, high);

    return node;
  };

  return dfs(root, low, high);
};

// Given the root of a binary search tree and the lowest and highest boundaries as low and high

// trim the tree so that all its elements lies in [low, high]
