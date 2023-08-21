/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const pairs = position.map((p, index) => {
    return [p, speed[index]];
  });
  const stack = [];

  pairs.sort(([a], [b]) => b - a);

  for (const [p, s] of pairs) {
    stack.push((target - p) / s);
    while (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
