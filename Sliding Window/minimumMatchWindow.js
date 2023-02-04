const minimumWindowSubstring = (s, p) => {
  let fs = new Map(),
    fp = new Map();

  for (let i = 0; i < p.length; i++) {
    const character = p[i];
    if (fp.has(character)) {
      fp.set(character, fp.get(character) + 1);
    } else {
      fp.set(character, 1);
    }
  }
  let cnt = 0,
    start = 0,
    start_index = -1,
    min_so_far = Infinity,
    window_size = 0;
  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    fs.has(character)
      ? fs.set(character, fs.get(character) + 1)
      : fs.set(character, 1);
    if (
      fp.has(character) &&
      fs.has(character) &&
      fs.get(character) <= fp.get(character)
    ) {
      cnt++;
    }
    if (cnt === p.length) {
      while (!fp.has(s[start]) || fs.get(s[start]) > fp.get(s[start])) {
        fs.has(s[start]) && fs.set(s[start], fs.get(s[start]) - 1);
        start++;
      }
      window_size = i - start + 1;
      if (window_size < min_so_far) {
        min_so_far = window_size;
        start_index = start;
      }
    }
  }
  if (start_index === -1) {
    return '';
  }
  return s.slice(start_index, start_index + min_so_far);
};

console.log(minimumWindowSubstring('a', 'aa'));
