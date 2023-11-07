/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  if (p === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let l = 0,
    r = 10 ** 9;

  const canBuild = (threshold) => {
    let i = 0,
      cnt = 0;

    while (i < nums.length - 1) {
      if (Math.abs(nums[i] - nums[i + 1]) <= threshold) {
        cnt += 1;
        i += 2;
      } else {
        i += 1;
      }

      if (cnt === p) {
        return true;
      }
    }
    return false;
  };

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (canBuild(m)) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};

console.log(minimizeMax([10, 1, 2, 7, 1, 3], 2));
