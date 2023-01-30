const minSwaps = (arr) => {
  const n = arr.length;
  const arrPos = arr
    .map((item, idx) => [item, idx])
    .sort((a, b) => a[0] - b[0]);

  let count = 0;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (visited[i] || arrPos[i][1] === i) {
      continue;
    }
    let j = i;
    let cycle_count = 0;
    while (!visited[j]) {
      cycle_count++;
      visited[j] = true;
      j = arrPos[j][1];
    }
    if (cycle_count) {
      count += cycle_count - 1;
    }
  }

  return count;
};

console.log(minSwaps([2, 4, 5, 1, 3]));
