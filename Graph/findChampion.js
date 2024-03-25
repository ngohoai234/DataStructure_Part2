/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  let ans = -1;
  let cnt = 0;
  const degree = new Array(n).fill(0).map(() => 0);

  debugger;
  for (const [u, v] of edges) {
    degree[v]++;
  }

  for (let i = 0; i < degree.length; i++) {
    if (degree[i] === 0) {
      count++;
      ans = i;
    }
  }

  return cnt > 1 ? -1 : ans;
};

console.log(findChampion(2, [[1, 0]]));
