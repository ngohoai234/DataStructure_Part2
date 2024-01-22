/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];

  const bt = (curr, start, subset) => {
    if (curr === target) {
      res.push([...subset]);
    }
    if (curr >= target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i === start || candidates[i - 1] !== candidates[i]) {
        subset.push(candidates[i]);
        bt(curr + candidates[i], i + 1, subset);
        subset.pop();
      }
    }
  };

  bt(0, 0, []);

  return res;
};

// join the current string and check whether it exist
