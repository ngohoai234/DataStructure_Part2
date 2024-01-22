/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  const res = [];
  const seen = new Array(nums.length).fill(false);
  const bt = (subset) => {
    if (subset.length === nums.length) {
      res.push([...subset]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i - 1] === nums[i] && !seen[i - 1]) || seen[i]) {
        continue;
      }
      seen[i] = true;
      subset.push(nums[i]);
      bt(subset);
      seen[i] = false;
      subset.pop();
    }
  };

  bt([]);
  return res;
};
