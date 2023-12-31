// 96. Unique Binary Search Trees
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const numTrees = new Array(n + 1).fill(1);
  for (let i = 2; i < n + 1; i++) {
    let total = 0;
    for (let j = 1; j < i + 1; j++) {
      const left = j - 1;
      const right = i - j;

      total += numTrees[left] * numTrees[right];
    }

    numTrees[i] = total;
  }

  return numTrees[n];
};

console.log(numTrees(3));
