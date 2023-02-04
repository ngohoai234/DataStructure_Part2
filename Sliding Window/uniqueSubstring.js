const longestUniqueSubString = (str) => {
  const hash = new Map();
  let left = 0;
  let max_sequence = 0;
  for (let right = 0; right < str.length; right++) {
    const element = str[right];
    if (hash.has(element)) {
      const prevIdx = hash.get(element);
      if (left <= prevIdx) {
        left = prevIdx + 1;
      }
    }
    max_sequence = Math.max(max_sequence, right - left + 1);
    hash.set(element, right);
  }
  return max_sequence;
};

console.log(longestUniqueSubString('abcabcbb'));
