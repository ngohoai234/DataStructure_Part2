/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const backtracking = (start, currentXor) => {
    if (start === nums.length) {
      return currentXor;
    }
    // calculate the sum of xor with current number
    const withElement = backtracking(start + 1, currentXor ^ nums[start]);
    // calculate the sum of xor with out current number
    const withoutElement = backtracking(start + 1, currentXor);

    return withElement + withoutElement;
  };

  return backtracking(0, 0);
};

// console.log(subsetXORSum([1, 3]));

console.log(subsetXORSum([5, 1, 6]));
