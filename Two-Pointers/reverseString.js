const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    swap(s, left, right);
    left++;
    right--;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
