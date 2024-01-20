/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const subset = [];

  const bt = () => {
    if (subset.length === nums.length) {
      res.push([...subset]);
      return;
    }

    for (const num of nums) {
      if (subset.includes(num)) {
        continue;
      }
      subset.push(num);
      bt();
      subset.pop();
    }
  };

  bt();

  return res;
};

console.log(permute([1, 2, 3]));
