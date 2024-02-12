// 1462. Course Schedule IV

// DFS: solution
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const adj = new Array(numCourses).fill(0).map(() => []);
  //   {course: prerequisites}
  const map = {};
  const res = [];

  //   build adjacent list
  for (const [pre, course] of prerequisites) {
    adj[course].push(pre);
  }

  const dfs = (course) => {
    if (!map.hasOwnProperty(course)) {
      map[course] = new Set();

      for (const nei of adj[course]) {
        const values = dfs(nei);
        for (const value of values) {
          map[course].add(value);
        }
      }
      map[course].add(course);
    }

    return map[course];
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }

  for (const [u, v] of queries) {
    // answer whether course uj is a prerequisite of course vj or not.
    res.push(map[v].has(u));
  }
  return res;
};

console.log(
  checkIfPrerequisite(
    5,
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    [
      [0, 4],
      [4, 0],
      [1, 3],
      [3, 0],
    ]
  )
);
