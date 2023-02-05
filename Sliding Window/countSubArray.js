// Count Subarrays with Target Sum
// Given an unsorted array of integers, find the number of subarrays having sum exactly equal to a given number k.

const cntSubarrays = (arr, k) => {
  const map = new Map();
  map.set(0, 1);
  let ans = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    ans += map.get(sum - k) ?? 0;

    map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);
  }
  return ans;
};
console.log(cntSubarrays([1, 1, 1, 1, 1], 1));
