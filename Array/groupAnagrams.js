const groupAnagrams = (strs) => {
  const map = {};

  for (const character of strs) {
    const count = new Array(26).fill(0);

    for (const subCharacter of character) {
      count[subCharacter.charCodeAt() - 'a'.charCodeAt()] += 1;
    }

    const key = count.join('-');

    if (map[key]) {
      map[key].push(character);
    } else {
      map[key] = [character];
    }
  }

  return Object.values(map);
};
