const wordPattern = (pattern, s) => {
  s = s.split(' ');
  if (s.length !== pattern.length) {
    return false;
  }
  const wordToChar = new Map();
  const charToWord = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = s[i];

    wordToChar.set(word, char);
    charToWord.set(char, word);
  }
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = s[i];

    if (charToWord.get(char) !== word || wordToChar.get(word) !== char) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern('aaa', 'aa aa aa aa'));
