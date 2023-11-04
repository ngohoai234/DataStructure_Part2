/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

var nextGreaterElement = function (nums1, nums2) {
  const stack = []; // store greater than number
  const map = new Map();
  const res = [];

  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  for (const num of nums1) {
    const value = map.get(num) ?? -1;

    res.push(value);
  }

  return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
