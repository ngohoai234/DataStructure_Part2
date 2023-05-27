// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

// A palindrome is a string that reads the same forwards and backwards.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

/**
 * @param {string} s
 * @return {number}
 */
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
var countPalindromicSubsequence = function (s) {
  let count = 0;
  for (const character of alphabets) {
    const start = s.indexOf(character);
    const last = s.lastIndexOf(character);

    if (start < last) {
      for (const char of alphabets) {
        const mid = s.indexOf(char, start + 1);

        if (mid !== -1 && mid < last) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(countPalindromicSubsequence('bbcbaba'));
