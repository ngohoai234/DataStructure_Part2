const longestConsecutive = (nums) => {
  if (!Array.isArray(nums)) {
    return 0;
  }
  const set = new Set();
  let currentCount = 0;
  nums.forEach((i) => set.add(i));
  [...set.keys()].forEach((i) => {
    const parent = i - 1;
    if (!set.has(parent)) {
      let cnt = 1;
      let nextValue = i + 1;
      while (set.has(nextValue)) {
        cnt++;
        nextValue++;
      }
      if (currentCount < cnt) {
        currentCount = cnt;
      }
    }
  });
  return currentCount;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
