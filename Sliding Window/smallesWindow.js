const smallestWindow = (str) => {
  const visited = new Map();
  const needed = new Map();
  for (let i = 0; i < str.length; i++) {
    needed.set(str[i], 1);
  }
  const lengthDistinct = [...needed].length;
  let start = 0,
    cnt = 0,
    window_size = 0,
    start_index = -1;
  min = Infinity;
  for (let i = 0; i < str.length; i++) {
    const character = str.charAt(i);
    visited.has(character)
      ? visited.set(character, visited.get(character) + 1)
      : visited.set(character, 1);
    if (visited.has(character) && visited.get(character) === 1) {
      cnt++;
    }
    if (cnt === lengthDistinct) {
      debugger;
      while (!needed.has(str[start]) || visited.get(str[start]) > 1) {
        visited.set(str[start], visited.get(str[start]) - 1);
        start++;
      }
      window_size = i - start + 1;
      if (window_size < min) {
        min = window_size;
        start_index = start;
      }
    }
  }
  return str.slice(start_index, min + start_index);
};

console.log(smallestWindow('aabcbcdbca'));
