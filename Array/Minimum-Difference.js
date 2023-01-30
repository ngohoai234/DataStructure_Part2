const minDifference = (a, b) => {
  const sortedArrayA = a.sort((a, b) => a - b);
  const sortedArrayB = b.sort((a, b) => a - b);
  const m = sortedArrayA.length;
  const n = sortedArrayB.length;
  let i = 0,
    j = 0;
  let result = Infinity;
  while (i < m && j < n) {
    const difference = Math.abs(sortedArrayA[i] - sortedArrayB[j]);
    result = Math.min(difference, result);
    if (sortedArrayA[i] < sortedArrayB[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};

console.log(minDifference([1, 2, 11, 15], [4, 12, 19, 23, 127, 235]));
