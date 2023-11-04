/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const cnt = new Array(128).fill(0);
  let l = 0;

  for (let character of s1) {
    cnt[character.charCodeAt()]++;
  }

  for (let r = 0; r < s2.length; r++) {
    const c = s2[r].charCodeAt();
    cnt[c]--;
    while (cnt[c] < 0) {
      cnt[s2[l].charCodeAt()]++;
      l++;
    }
    if (r - l + 1 === s1.length) {
      return true;
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidboaoo'));
// bc
//
