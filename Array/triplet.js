const triplets = (arr, target) => {
  const n = arr.length;
  arr = arr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let currentSum = arr[i] + arr[j] + arr[k];
      if (currentSum === target) {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      } else if (currentSum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  console.log(result);
};
triplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18);
