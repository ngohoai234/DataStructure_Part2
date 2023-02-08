const merge = (arr, l, m, r) => {
  const n1 = m - l + 1;
  const n2 = r - m;

  const L = new Array(n1);
  const R = new Array(n2);

  let count = 0;

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let i = 0; i < n2; i++) {
    R[i] = arr[m + i + 1];
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
      count += m + 1 - (l + i);
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
  return count;
};

const mergeSort = (arr, s, e) => {
  if (s >= e) {
    return 0;
  }
  const mid = s + Math.floor((e - s) / 2);
  const a = mergeSort(arr, s, mid);
  const b = mergeSort(arr, mid + 1, e);
  const c = merge(arr, s, mid, e);
  return a + b + c;
};
const arr = [1, 20, 6, 4, 5];
console.log(mergeSort(arr, 0, arr.length - 1));
