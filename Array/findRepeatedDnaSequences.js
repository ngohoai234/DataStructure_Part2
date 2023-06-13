/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set();

  const res = new Set();

  const n = s.length;

  for (let i = 0; i <= n - 10; i++) {
    const sub = s.slice(i, i + 10);

    if (seen.has(sub)) {
      res.add(sub);
    }
    seen.add(sub);
  }

  return Array.from(res);
};
