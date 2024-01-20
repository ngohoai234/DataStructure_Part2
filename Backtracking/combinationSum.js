// 39. Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  const backtracking = (start, currSum, subset) => {
    debugger;
    if (currSum === target) {
      res.push([...subset]);
      return;
    }
    if (start >= candidates.length || currSum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      currSum += candidates[i];
      subset.push(candidates[i]);
      backtracking(i, currSum, subset);
      currSum -= subset.pop();
    }
  };

  backtracking(0, 0, []);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
