// Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.

// Note: Find the element in O(logN) time and assume that all the elements are distinct.

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
// Output : Found at index 8

const rotatedSearch = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[s] <= arr[mid]) {
      if (target >= arr[s] && target < arr[mid]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    } else {
      if (target > arr[mid] && target <= arr[e]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  }

  return -1;
};

const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
const target = 3;

console.log(rotatedSearch(arr, target));
