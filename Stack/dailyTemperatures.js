/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const res = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
