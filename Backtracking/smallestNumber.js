/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  const visited = new Array(pattern.length + 1).fill(false);
  let res = null;
  const currentNumber = [];

  const backtracking = (i) => {
    // If a valid number is found, stop further search
    if (res) {
      return res;
    }
    // Check if all positions are filled satisfying the pattern
    if (i === pattern.length + 1) {
      res = currentNumber.join('');
      return;
    }

    // Try all possible digits from 1 to 9 for the next character
    for (let j = 1; j <= 9; j++) {
      if (!visited[j]) {
        if (
          i &&
          pattern[i - 1] === 'I' &&
          currentNumber[currentNumber.length - 1] >= j
        ) {
          break;
        }
        if (
          i &&
          pattern[i - 1] === 'D' &&
          currentNumber[currentNumber.length - 1] <= j
        ) {
          break;
        }
        visited[j] = true;
        currentNumber.push(j);

        backtracking(i + 1);

        visited[j] = false;
        currentNumber.pop();
      }
    }
  };

  backtracking(0);

  return res;
};

console.log(smallestNumber('IIIDIDDD'));
