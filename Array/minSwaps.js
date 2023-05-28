/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let closingTag = 0;
  let maxContiguousClosing = 0;

  for (const character of s) {
    debugger;
    if (character === ']') {
      closingTag++;
    } else {
      closingTag--;
    }
    maxContiguousClosing = Math.max(maxContiguousClosing, closingTag);
  }
  return Math.floor((maxContiguousClosing + 1) / 2);
};

console.log(minSwaps('[]'));
