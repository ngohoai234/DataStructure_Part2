const lengthOfLastWord = (s) => {
  let count = 0;

  s = s.trim();

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      break;
    }
    count++;
  }
  return count;
};

console.log(lengthOfLastWord('Hello World'));
