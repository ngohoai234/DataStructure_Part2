/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (
      (m - 1 < 0 || nums[m - 1] !== nums[m]) &&
      (m + 1 === nums.length || nums[m] !== nums[m + 1])
    ) {
      return nums[m];
    }
    const leftSize = nums[m - 1] === nums[m] ? m - 1 : m;

    if (leftSize % 2 === 0) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
};

// every elements appears exactly twice

//

// 1 1 2 3 3 4 4 8 8
//         |

// if num[m] !== num[m-1]
