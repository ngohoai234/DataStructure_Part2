/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderNumbers = {};

  for (let i = 0; i < order.length; i++) {
    orderNumbers[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    for (let j = 0; j < word1.length; j++) {
      if (j === word2.length) {
        return false;
      }

      if (word1[j] !== word2[j]) {
        if (orderNumbers[word1[j]] > orderNumbers[word2[j]]) {
          return false;
        }
        break;
      }
    }
  }

  return true;
};

console.log(
  isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
);
