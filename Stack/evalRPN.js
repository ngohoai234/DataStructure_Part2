/**
 *
 * @param {number} a
 * @param {number} b
 * @param {string} operation
 * @returns {number}
 */

const operations = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.trunc(a / b);

    default:
      return 0;
  }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const character of tokens) {
    switch (character) {
      case '+':
      case '-':
      case '*':
      case '/':
        const n1 = stack.pop();
        const n2 = stack.pop();
        stack.push(operations(n2, n1, character));
        break;

      default:
        stack.push(Number(character));
        break;
    }
  }

  return stack.pop();
};
