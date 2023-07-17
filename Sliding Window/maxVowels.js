/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set('ueoai'.split(''));
  let c = 0;
  let res = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (vowels.has(s[r])) {
      c++;
    }

    if (r >= k - 1) {
      res = Math.max(res, c);
      if (vowels.has(s[l])) {
        c--;
      }
      l++;
    }
  }
  return res;
};

// abciiidef

console.log(maxVowels('leetcode', 3));

// abciiidef
//
