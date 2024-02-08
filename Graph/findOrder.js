/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  const visited = new Set();
  const res = new Set();

  const dfs = (currNode) => {
    if (visited.has(currNode)) {
      return false;
    }

    if (res.has(currNode)) {
      return true;
    }

    visited.add(currNode);

    for (const nei of graph[currNode]) {
      if (!dfs(nei)) {
        return false;
      }
    }

    graph[currNode] = [];
    visited.delete(currNode);
    res.add(currNode);
    return true;
  };

  //   build graph
  for (const [course, prerequisite] of prerequisites) {
    graph[course].push(prerequisite);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }

  return [...res];
};

console.log(findOrder(2, [[1, 0]]));
