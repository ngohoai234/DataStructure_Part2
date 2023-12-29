/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  // manager[i] -> [employee]
  const adjList = manager.map(() => []);

  for (let i = 0; i < manager.length; i++) {
    if (manager[i] === -1) {
      continue;
    }

    adjList[manager[i]].push(i);
  }

  const dfs = (currentId) => {
    if (!adjList[currentId].length) {
      return 0;
    }
    let max = 0;

    const subHead = adjList[currentId];

    for (let i = 0; i < subHead.length; i++) {
      max = Math.max(max, dfs(subHead[i]));
    }

    return max + informTime[currentId];
  };

  return dfs(headID);
};
