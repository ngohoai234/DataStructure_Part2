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

const quickSelect = (arr, s, e, k) => {
  const pivot = partition(arr, s, e);
  if (pivot === k) {
    return arr[pivot];
  } else if (k < pivot) {
    return quickSelect(arr, s, pivot - 1, k);
  } else {
    return quickSelect(arr, pivot + 1, e, k);
  }
};

const arr = [10, 5, 2, 0, 7, 6, 4];

console.log(quickSelect(arr, 0, arr.length - 1, 7));
