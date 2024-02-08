// 207. Course Schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  const visited = new Set();

  const dfs = (currNode) => {
    if (visited.has(currNode)) {
      return false;
    }

    visited.add(currNode);

    for (const nei of graph[currNode]) {
      if (!dfs(nei)) {
        return false;
      }
    }

    graph[currNode] = [];
    visited.delete(currNode);

    return true;
  };

  //   build graph
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};

// numCourses = 2, prerequisites = [[a1,b1]]

// you must take course b1 before get the course a1

// return true if you can finish all the courses

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
