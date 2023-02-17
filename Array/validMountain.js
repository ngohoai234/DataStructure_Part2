// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
const validMountainArray = (arr) => {
  if (arr.length < 3) {
    return false;
  }
  let i = 1;
  const n = arr.length;
  // arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
  while (arr[i] > arr[i - 1] && i < n) {
    i++;
  }
  if (i === 1 || i === n) {
    return false;
  }
  // arr[i] > arr[i + 1] > ... > a
  while (arr[i - 1] > arr[i] && i < n) {
    i++;
  }

  return i === n;
};

console.log(validMountainArray([0, 3, 2, 1]));
