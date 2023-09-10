// input: nums integers array

// output: the squares of each number sorted

// Time Complexity: require O(n)

// Example:

// input: nums = [-4,-1,0,3,10]

// output: [0,1,9,16,100]

// sorted array => right

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0,
    r = nums.length - 1;

  const res = new Array(nums.length).fill(0);
  let j = r;
  while (l <= r) {
    if (nums[l] ** 2 > nums[r] ** 2) {
      res[j] = nums[l++] ** 2;
    } else {
      res[j] = nums[r--] ** 2;
    }
    j--;
  }
  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
