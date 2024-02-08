/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set(deadends);

  // exception case
  if (visited.has('0000')) {
    return -1;
  }
  const generatePossibleCase = (lock) => {
    const res = [];

    for (let i = 0; i < 4; i++) {
      const plus = String((Number(lock[i]) + 1) % 10);
      res.push(lock.slice(0, i) + plus + lock.slice(i + 1));
      const subtract = String((Number(lock[i]) - 1 + 10) % 10);
      res.push(lock.slice(0, i) + subtract + lock.slice(i + 1));
    }

    return res;
  };

  // [lock, count]
  const queue = [['0000', 0]];
  while (queue.length) {
    const [lock, count] = queue.shift();

    if (lock === target) {
      return count;
    }

    const children = generatePossibleCase(lock);

    for (const child of children) {
      if (visited.has(child)) {
        continue;
      }
      queue.push([child, count + 1]);
      visited.add(child);
    }
  }

  return -1;
};

// one lock has 4 circular wheels

// each wheel has 10 slots

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'));
