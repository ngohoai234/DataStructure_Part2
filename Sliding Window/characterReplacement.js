/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let seen = {};
  let maxF = 0;
  let res = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    seen[s[end]] ||= 0;
    seen[s[end]] += 1;

    maxF = Math.max(maxF, seen[s[end]]);

    const isValid = end - start - maxF < k;

    if (!isValid) {
      seen[s[start]] -= 1;
      start++;
    }
    res = Math.max(res, end - start + 1);
  }
  return res;
}

console.log(characterReplacement('ABBAAAAAAB', 2));

// find the longest valid window => try find to the max frequently

// ABBAAAAAA
//      |
// start = 0, end = 3, frequently = 2, k = 2
// isValid => end - start - frequently < k
