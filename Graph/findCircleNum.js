/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visited = new Set();
  let res = 0;

  const dfs = (i) => {
    for (let j = 0; j < isConnected.length; j++) {
      if (!visited.has(j) && isConnected[i][j] === 1) {
        visited.add(j);
        dfs(j);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      res++;
    }
  }

  return res;
};
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
