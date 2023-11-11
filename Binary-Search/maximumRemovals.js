/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let l = 0,
    r = removable.length - 1;
  let res = 0;
  debugger;
  const isSubsequence = (remove) => {
    let i1 = 0,
      i2 = 0;

    while (i1 < s.length && i2 < p.length) {
      if (remove.has(i1) || s[i1] !== p[i2]) {
        i1 += 1;
        continue;
      }
      i1 += 1;
      i2 += 1;
    }

    return p.length === i2;
  };

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const remove = new Set(removable.slice(0, m + 1));

    if (isSubsequence(remove)) {
      l = m + 1;
      res = Math.max(res, m + 1);
    } else {
      r = m - 1;
    }
  }

  return res;
};

console.log(
  maximumRemovals('qobftgcueho', 'obue', [5, 3, 0, 6, 4, 9, 10, 7, 2, 8])
);
