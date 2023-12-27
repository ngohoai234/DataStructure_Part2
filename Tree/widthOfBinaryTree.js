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
var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  // Queue for level order traversal, holding nodes and their positions.
  const queue = [];
  queue.push({ node: root, position: 1 });
  let maxWidth = 0; // Variable to store the maximum width.

  // While there are nodes in the queue to process...
  while (queue.length > 0) {
    const levelSize = queue.length; // Number of nodes at the current level.
    const leftMost = queue[0].position; // Position of the leftmost node at the current level (used as an offset).

    // Iterate through the nodes of the current level.
    for (let i = 0; i < levelSize; i++) {
      const { node: currentNode, position: currentPosition } = queue.shift();

      // On the last iteration, update maxWidth using currentPosition as the rightMost position.
      if (i === levelSize - 1) {
        maxWidth = Math.max(maxWidth, currentPosition - leftMost + 1);
      }

      // Subtract leftMost to avoid high values and potential overflow.
      const adjustedPosition = currentPosition - leftMost;

      // Add children to the queue with their respective positions.
      if (currentNode.left) {
        queue.push({ node: currentNode.left, position: 2 * adjustedPosition });
      }
      if (currentNode.right) {
        queue.push({
          node: currentNode.right,
          position: 2 * adjustedPosition + 1,
        });
      }
    }
  }

  return maxWidth;
};
