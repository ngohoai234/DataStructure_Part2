/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pCount = new Map();

  let leftWindow = 0;
  let matches = 0;
  const res = [];

  for (const character of p) {
    if (pCount.has(character)) {
      pCount.set(character, pCount.get(character) + 1);
    } else {
      pCount.set(character, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    if (pCount.has(character)) {
      const minus = pCount.get(character) - 1;

      pCount.set(character, minus);

      if (minus === 0) {
        matches++;
      }
    }

    if (i >= p.length) {
      const leftChar = s[leftWindow];
      if (pCount.has(leftChar)) {
        const prev = pCount.get(leftChar);
        pCount.set(leftChar, prev + 1);

        if (prev === 0) {
          matches--;
        }
      }
      leftWindow++;
    }

    if (matches === pCount.size) {
      res.push(leftWindow);
    }
  }
  return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
