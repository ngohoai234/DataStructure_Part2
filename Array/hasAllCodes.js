/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const seen = new Set();

  for (let i = 0; i <= s.length - k; i++) {
    seen.add(s.slice(i, i + k));
  }

  return seen.size >= Math.pow(2, k);
};

console.log(hasAllCodes('00110', 2));
