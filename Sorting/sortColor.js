const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
const sortBalls = (arr) => {
  const n = arr.length;
  let low = 0,
    h = n - 1,
    mid = 0;

  while (mid <= h) {
    const element = arr[mid];
    if (element === 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (element === 1) {
      mid++;
    } else {
      swap(arr, mid, h);
      h--;
    }
  }
};

const arr = [0, 1, 2, 0, 1, 2];

sortBalls(arr);

console.log(arr);
