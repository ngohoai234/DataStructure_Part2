/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let res = 0;

  const seen = new Map();

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (seen.has(character)) {
      const prev = seen.get(character);
      if (l <= prev) {
        l = prev + 1;
      }
    }

    res = Math.max(i - l + 1, res);
    seen.set(character, i);
  }

  return res;
};

console.log(lengthOfLongestSubstring('abba'));
