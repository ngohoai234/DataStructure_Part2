/**
 * @param {number[][]} grid
 * @return {number}
 */

// * The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.
var gridGame = function (g) {
  let totalUp = g[0].reduce((acc, n) => acc + n, 0);

  let bottom = 0;
  let res = Infinity;

  for (let i = 0; i < g[0].length; i++) {
    totalUp -= g[0][i];

    res = Math.min(res, Math.max(totalUp, bottom));

    bottom += g[1][i];
  }

  return res;
};

console.log(
  gridGame([
    [2, 5, 4],
    [1, 5, 1],
  ])
);
