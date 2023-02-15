const frequentlyCount = (arr, k) => {
  let s = 0,
    e = arr.length - 1;
  let ans = -1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] === k) {
      ans = mid;
    }
    if (arr[mid] == k || arr[mid] > k) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return ans;
};

console.log(frequentlyCount([0, 1, 2, 2, 2, 2, 3], 2));
