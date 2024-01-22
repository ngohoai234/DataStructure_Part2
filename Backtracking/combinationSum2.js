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
    let prev = -1;
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }
      subset.push(candidates[i]);
      bt(curr + candidates[i], i + 1, subset);
      subset.pop();
      prev = candidates[i];
    }
  };

  bt(0, 0, []);

  return res;
};

// join the current string and check whether it exist
