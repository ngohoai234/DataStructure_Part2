/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const uniqueSet = new Set(nums);

  let maxCount = 0;
  uniqueSet.forEach((value) => {
    const parent = value - 1;
    if (!uniqueSet.has(parent)) {
      let next = value + 1;
      let count = 1;
      while (uniqueSet.has(next)) {
        next++;
        count++;
      }
      maxCount = Math.max(maxCount, count);
    }
  });
  return maxCount;
};

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
