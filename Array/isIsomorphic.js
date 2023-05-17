const isIsomorphic = function (s, t) {
  const mapST = {},
    mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i],
      c2 = t[i];

    if ((mapST[c1] && mapST[c1] !== c2) || (mapTS[c2] && mapTS[c2] !== c1)) {
      return false;
    }

    mapST[c1] = c2;
    mapTS[c2] = c1;
  }
  return true;
};

console.log(isIsomorphic('badc', 'baba'));
