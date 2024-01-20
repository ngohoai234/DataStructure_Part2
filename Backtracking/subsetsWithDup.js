/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  debugger;

  const bt = (start, subset) => {
    res.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      if (i === start || nums[i] !== nums[i - 1]) {
        subset.push(nums[i]);
        bt(i + 1, subset);
        subset.pop();
      }
    }
  };

  bt(0, []);

  return res;
};

console.log(subsetsWithDup([1, 2, 2]));
