/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const count = {};
  for (const character of tiles) {
    count[character] |= 0;
    count[character] += 1;
  }

  const backtracking = () => {
    let res = 0;

    for (const character in count) {
      if (count[character] === 0) {
        continue;
      }

      res++;
      count[character] -= 1;

      res += backtracking();

      count[character] += 1;
    }

    return res;
  };

  return backtracking();
};

console.log(numTilePossibilities('AAB'));
