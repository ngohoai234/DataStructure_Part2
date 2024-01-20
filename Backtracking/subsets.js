/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const backtracking = (start, subset) => {
    res.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);

      backtracking(i + 1, subset);

      subset.pop();
    }
  };
  backtracking(0, []);

  return res;
};

console.log(subsets([1, 2, 3]));

// [] , 0

// [1], 1

// [1,2] 2 [1,2,3,]
