const housing = (arr, k) => {
  let prefix = 0;
  let i = 0,
    j = 0;
  const n = arr.length;
  const result = [];
  while (j < n) {
    prefix += arr[j];
    j++;
    while (i < j && prefix > k) {
      prefix -= arr[i];
      i++;
    }
    if (prefix === k) {
      result.push([i, j - 1]);
    }
  }
  return result;
};

console.log(housing([1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2], 8));
