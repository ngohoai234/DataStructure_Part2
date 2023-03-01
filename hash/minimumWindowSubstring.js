// leet code 76
// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

var minWindow = function (s, p) {
  let fs = new Map();
  let fp = new Map();

  for (let i = 0; i < p.length; i++) {
    fp.set(p[i], fp.get(p[i]) || 1);
  }
  let cnt = 0,
    start = 0,
    start_index = 0,
    window_size = 0,
    min_so_far = Infinity;

  for (let right = 0; right < s.length; right++) {
    const character = s[right];
    fs.set(character, (fs.get(character) || 0) + 1);
    if (
      fp.has(character) &&
      fs.has(character) &&
      fs.get(character) <= fp.get(character)
    ) {
      cnt++;
    }
    if (cnt === p.length) {
      while (!fp.has(s[start]) || fs.get(s[start]) > fp.get(s[start])) {
        fs.set(s[start], fs.get(s[start]--));
        start++;
      }
      window_size = right - start + 1;

      if (window_size < min_so_far) {
        min_so_far = window_size;
        start_index = start;
      }
    }
  }
  console.log(s.slice(start_index, start_index + min_so_far));
};

console.log(minWindow('abdcab', 'abc'));
