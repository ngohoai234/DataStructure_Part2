/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let res = nums
    .map((i) => i.toString())
    .sort((s1, s2) => {
      return Number(s2 + s1) - Number(s1 + s2);
    })
    .join('');

  while (res[0] === '0' && res.length > 1) {
    res = res.slice(1);
  }
  return res;
};

console.log(largestNumber([999999998, 999999997, 999999999, 0, 0, 0, 0]));
