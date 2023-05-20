const nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
    result.push(-1);
  }

  for (const num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      const value = stack.pop();
      const idx = map.get(value);
      result[idx] = num;
    }
    if (map.has(num)) {
      stack.push(num);
    }
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
