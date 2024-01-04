// 124. Binary Tree Maximum Path Sum

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
var maxPathSum = function (root) {
  let maxPath = -Infinity;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const maxLeft = Math.max(dfs(node.left), 0);
    const maxRight = Math.max(dfs(node.right), 0);

    // in case get both two direction left and right

    //      20
    //   /     \
    // 15       7

    // choose path 20 + 15 + 7
    const currentPath = node.val + maxLeft + maxRight;

    maxPath = Math.max(maxPath, currentPath);

    // in case

    //      10
    // 9          20
    //        15      7
    // -> choose path (10 + 20 + 15 )
    return node.val + Math.max(maxLeft, maxRight);
  };

  dfs(root);

  return maxPath;
};

// choose both or left or right

//          -10
//  9                   20
//              15              7
