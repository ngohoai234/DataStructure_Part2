/**
 * @param {string[]} ideas
 * @return {number}
 */

var distinctNames = function (ideas) {
  const firstMap = new Map();
  let res = 0;
  for (const str of ideas) {
    const firstCharacter = str[0];
    const remain = str.slice(1);
    if (firstMap.has(firstCharacter)) {
      firstMap.set(firstCharacter, firstMap.get(firstCharacter).add(remain));
    } else {
      firstMap.set(firstCharacter, new Set().add(remain));
    }
  }
  for (const wordA of firstMap.keys()) {
    for (const wordB of firstMap.keys()) {
      if (wordA === wordB) {
        continue;
      }
      const setA = firstMap.get(wordA);
      const setB = firstMap.get(wordB);

      const intercepts = [...setA].filter((x) => setB.has(x)).length;

      res += (setA.size - intercepts) * (setB.size - intercepts);
    }
  }
  return res;
};

console.log(distinctNames(['coffee', 'donuts', 'time', 'toffee']));
