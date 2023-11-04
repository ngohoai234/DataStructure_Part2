/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const seen = new Map();
  let l = 0;
  let res = 1;

  for (let r = 0; r < fruits.length; r++) {
    seen.set(fruits[r], (seen.get(fruits[r]) || 0) + 1);
    while (seen.size > 2) {
      const c = seen.get(fruits[l]) - 1;
      seen.set(fruits[l], c);
      if (c === 0) {
        seen.delete(fruits[l]);
      }
      l++;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};

console.log(totalFruit([0, 1, 2, 2]));

// 1 0 1 2 2 3
