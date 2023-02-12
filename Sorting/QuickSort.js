const swap = (i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
const partition = (arr, s, e) => {
  let i = s - 1;
  const pivot = arr[e];
  for (let j = s; j < e; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(i, j);
    }
  }
  swap(i + 1, e);

  return i + 1;
};
const quickSort = (arr, s, e) => {
  if (s >= e) {
    return;
  }
  const pivot = partition(arr, s, e);
  quickSort(arr, s, pivot - 1);
  quickSort(arr, pivot + 1, e);
};

const arr = [5, 4, 3, 2, 1];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
