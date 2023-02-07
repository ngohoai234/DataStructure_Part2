const merge = (arr, l, m, r) => {
  const n1 = m - l + 1;
  const n2 = r - m;
  const L = [];
  const R = [];
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }
  let i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};
const mergeSort = (arr, s, e) => {
  if (s >= e) {
    return;
  }
  const mid = Math.floor((s + e) / 2);
  mergeSort(arr, s, mid);
  mergeSort(arr, mid + 1, e);
  merge(arr, s, mid, e);
};

const arr = [12, 11, 13, 5, 6, 7];
const n = arr.length;
mergeSort(arr, 0, n - 1);
console.log(arr);
