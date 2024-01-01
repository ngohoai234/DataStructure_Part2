// 337. House Robber III

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
var rob = function (root) {
  const dfs = (node) => {
    if (!node) {
      return [0, 0];
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    // if the thief decide to rob the current node
    const withRoot = node.val + left[1] + right[1];
    // if the thief decide to skip the node
    const withoutRoot = Math.max(left) + Math.max(right);
    return [withRoot, withoutRoot];
  };

  return Math.max(dfs(root));
};

// max profit we can get with the root

// max profit we can get without the root

//                  1
//         9                2
//  3
//                      8       7

// -> result = 9 + 8 +7
