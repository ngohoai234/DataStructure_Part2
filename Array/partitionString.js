// use hash set to check duplicate characters

/**
 * @param {string} s
 * @return {number}
 */

var partitionString = function (s) {
  const seen = new Set();
  let res = 1;
  for (const character of s) {
    if (seen.has(character)) {
      res++;
      seen.clear();
    }
    seen.add(character);
  }
  return res;
};

console.log(partitionString('ssssss'));
