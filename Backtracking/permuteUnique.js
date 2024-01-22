/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];

  const count = {};
  for (const num of nums) {
    count[num] |= 0;
    count[num] += 1;
  }

  const bt = (subset) => {
    if (subset.length === nums.length) {
      res.push([...subset]);
      return;
    }

    for (const n in count) {
      if (count[n] > 0) {
        subset.push(n);
        count[n] -= 1;
        bt(subset);
        count[n] += 1;
        subset.pop();
      }
    }
  };
  bt([]);
  return res;
};
