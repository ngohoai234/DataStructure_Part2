// 1239. Maximum Length of a Concatenated String with Unique Characters

const overlap = (charSet, s) => {
  const newSet = new Set([...charSet]);
  for (const c of s) {
    if (newSet.has(c)) {
      return true;
    }
    newSet.add(c);
  }

  return false;
};

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const charSet = new Set();

  const bt = (i) => {
    debugger;
    if (i === arr.length) {
      return charSet.size;
    }
    let res = 0;
    for (let j = i; j < arr.length; j++) {
      if (!overlap(charSet, arr[j])) {
        for (const c of arr[j]) {
          charSet.add(c);
        }
        res = Math.max(res, bt(j + 1));
        for (const c of arr[j]) {
          charSet.delete(c);
        }
      } else {
        res = Math.max(res, charSet.size);
      }
    }
    return res;
  };

  return bt(0);
};

// A string s is formed by the concatenation of a subsequence of arr that has unique characters.

console.log(
  maxLength([
    'e',
    'tpgynpylqbyqjaf',
    'svkgfmpgftxjjrcxxsog',
    'bxypbbrlckiolfwpqgsoc',
    'kwnelumrnnsryjdeppanuqbsu',
  ])
);
