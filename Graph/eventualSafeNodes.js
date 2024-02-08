// 802. Find Eventual Safe States

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const safe = {};
  const res = [];

  const dfs = (currNode) => {
    if (safe.hasOwnProperty(currNode)) {
      return safe[currNode];
    }

    safe[currNode] = false;

    for (const nei of graph[currNode]) {
      // A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).
      if (!dfs(nei)) {
        return false;
      }
    }

    safe[currNode] = true;
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      res.push(i);
    }
  }

  return res;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
