// 2044. Count Number of Maximum Bitwise-OR Subsets

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max = 0;
  let res = 0;

  for (const num of nums) {
    // find the maximum sum of or
    max |= num;
  }

  const bt = (i, sumOr) => {
    if (sumOr === max) {
      res++;
    }
    for (let j = i; j < nums.length; j++) {
      bt(j + 1, sumOr | nums[j]);
    }
  };

  bt(0, 0);
  return res;
};

console.log(countMaxOrSubsets([2, 2, 2]));
