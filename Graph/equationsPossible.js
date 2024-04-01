/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const uf = new Array(26).fill(0).map((val, idx) => idx);
  const find = (x) => {
    if (x !== uf[x]) {
      uf[x] = find(uf[x]);
    }

    return uf[x];
  };

  for (const character of equations) {
    if (character[1] === '=') {
      uf[find(character[0].charCodeAt() - 'a'.charCodeAt())] = find(
        character[3].charCodeAt() - 'a'.charCodeAt()
      );
    }
  }

  for (const character of equations) {
    if (
      character[1] === '!' &&
      find(character[0].charCodeAt() - 'a'.charCodeAt()) ===
        find(character[3].charCodeAt() - 'a'.charCodeAt())
    ) {
      return false;
    }
  }

  return true;
};

console.log(equationsPossible(['a==b', 'b!=a']));
