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
    if (!overlap(charSet, arr[i])) {
      for (const c of arr[i]) {
        charSet.add(c);
      }
      res = bt(i + 1);
      for (const c of arr[i]) {
        charSet.delete(c);
      }
    }
    return Math.max(res, bt(i + 1));
  };

  return bt(0);
};

// A string s is formed by the concatenation of a subsequence of arr that has unique characters.

console.log(maxLength(['cha', 'r', 'act', 'ers']));
