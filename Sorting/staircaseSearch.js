const search = (arr, k) => {
  let m = arr.length;
  let n = arr[0].length;
  let i = 0;
  let j = n - 1;
  while (i < m && j < n) {
    const element = arr[i][j];
    if (element === k) {
      return true;
    } else if (element > k) {
      j--;
    } else {
      i++;
    }
  }

  return false;
};
let mat = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(search(mat, 3));
