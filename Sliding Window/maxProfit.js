/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let min = Infinity;

  for (const num of prices) {
    min = Math.min(min, num);
    res = Math.max(num - min, res);
  }
  return res;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
