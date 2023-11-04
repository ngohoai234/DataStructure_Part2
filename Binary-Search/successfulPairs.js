/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < spells.length; i++) {
    let l = 0,
      r = potions.length - 1;

    let s = -1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const value = spells[i] * potions[m];

      if (value >= success) {
        r = m - 1;
        s = m;
      } else {
        l = m + 1;
      }
    }

    res.push(s === -1 ? 0 : potions.length - s);
  }

  return res;
};

// spell and potion and success

// sort array potions

//  1 2 3 4 5
//  l   m   r

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
