// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2, 0, 1];
// Output: [0, 1, 2];

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const RED = 0,
  WHITE = 1,
  BLUE = 2;

const sortColors = function (arr) {
  let left = 0,
    mid = 0,
    right = arr.length - 1;
  while (mid <= right) {
    const color = arr[mid];

    if (color === RED) {
      swap(arr, left, mid);
      left++;
      mid++;
    } else if (color === WHITE) {
      mid++;
    } else {
      swap(arr, mid, right);
      right--;
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
