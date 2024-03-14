/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  let res = 0;
  const count = new Array(n).fill(0).map(() => 0);

  for (const [u, v] of roads) {
    count[u]++;
    count[v]++;
  }

  count.sort((a, b) => a - b);

  for (let i = 0; i < count.length; i++) {
    res += count[i] * (i + 1);
  }

  return res;
};
