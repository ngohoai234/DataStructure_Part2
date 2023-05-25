// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

var subarraySum = function (arr, k) {
  const prefix = [];
  const map = new Map();
  prefix[0] = arr[0];

  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = arr[i] + prefix[i - 1];
  }
  for (let i = 0; i < arr.length; i++) {
    if (prefix[i] === k) {
      count++;
    }

    // in case [0,0,0,0,0,0,0,0,0,0]
    if (map.has(prefix[i] - k)) {
      count += map.get(prefix[i] - k);
    }
    map.set(prefix[i], (map.get(prefix[i]) ?? 0) + 1);
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2));
