const pivotIndex = function (nums) {
  const total = nums.reduce((sum, num) => (sum += num), 0);
  let leftSight = 0;
  let i = 0;
  for (const num of nums) {
    const rightSight = total - num - leftSight;
    if (leftSight === rightSight) {
      return i;
    }
    leftSight += num;
    i++;
  }
  return -1;
};
