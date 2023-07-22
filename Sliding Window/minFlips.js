/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  const n = s.length;
  let ans1 = 0, // 010101
    ans2 = 0, // 101010
    ans = Infinity;

  //
  for (let i = 0; i < n * 2; i++) {
    if (String(i % 2) !== s[i % n]) {
      ans1++;
    }
    if (String((i + 1) % 2) !== s[i % n]) {
      ans2++;
    }

    if (i >= n) {
      if (String((i - n) % 2) !== s[i - n]) {
        ans1--;
      }
      if (String((i - n + 1) % 2) !== s[i - n]) {
        ans2--;
      }
    }

    if (i >= n - 1) {
      ans = Math.min(ans, ans1, ans2);
    }
  }
  return ans;
};

console.log(minFlips('01001001101'));
// Return the minimum number of type-2 operations you need to perform such that s becomes alternating.

// The string is called alternating if no two adjacent characters are eq
// 010010
// 010101
// 101010
