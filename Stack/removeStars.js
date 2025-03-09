/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];

  for (const character of s) {
    if (character === '*') {
      stack.pop();
    } else {
      stack.push(character);
    }
  }

  return stack.join('');
};
