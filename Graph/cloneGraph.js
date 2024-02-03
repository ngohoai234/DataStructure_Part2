/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const seen = new Map();

  const dfs = (currentNode) => {
    if (!currentNode) {
      return null;
    }

    if (seen.has(currentNode)) {
      return seen.get(currentNode);
    }

    const newNode = new Node(currentNode.val);

    seen.set(currentNode, newNode);

    for (const neighbor of currentNode.neighbors) {
      newNode.neighbors.push(dfs(neighbor));
    }

    return newNode;
  };
  return dfs(node);
};
