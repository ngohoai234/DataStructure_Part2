/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let j = 0;
  const stack = [];

  for (const num of pushed) {
    stack.push(num);

    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
};

console.log(validateStackSequences([1, 0, 2], [2, 1, 0]));
