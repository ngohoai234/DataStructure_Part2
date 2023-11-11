/**
 * @param {string[]} searchWord
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  const res = [];
  let l = 0,
    r = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    while (l <= r && products[l][i] !== searchWord[i]) {
      l += 1;
    }

    while (l <= r && products[r][i] !== searchWord[i]) {
      r -= 1;
    }

    res.push([]);

    const remain = r - l + 1;

    for (let i = 0; i < Math.min(3, remain); i++) {
      res[res.length - 1].push(products[l + i]);
    }
  }

  return res;
};

console.log(
  suggestedProducts(
    ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
    'mouse'
  )
);
