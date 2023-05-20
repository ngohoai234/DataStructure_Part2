const findDisappearedNumbers = function (nums) {
  const map = new Map();
  const length = nums.length;
  const res = [];
  for (const num of nums) {
    map.set(num, num);
  }

  for (let i = 1; i <= length; i++) {
    if (!map.has(i)) {
      res.push(i);
    }
  }
  return res;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
