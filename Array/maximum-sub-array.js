// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// brute force solution
// const maxSubarraySum = (arr) => {
//   if (!Array.isArray(arr) || !arr.length) {
//     return 0;
//   }

//   let max_sum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     let current_sum = 0;
//     while (j >= 0) {
//       current_sum += arr[j];
//       max_sum = Math.max(max_sum, current_sum);
//       j--;
//     }
//   }

//   return max_sum;
// };
//   let current_sum = arr[0];
//   let max_sum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     current_sum = Math.max(current_sum + arr[i], arr[i]);
//     max_sum = Math.max(max_sum, current_sum);
//   }
//   return max_sum;

const maxSubarraySum = (arr) => {
  let current_sum = arr[0];
  let max_sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    current_sum = Math.max(current_sum + arr[i], arr[i]);
    max_sum = Math.max(max_sum, current_sum);
  }
  return max_sum;
};
console.log(maxSubarraySum([5, 4, -1, 7, 8]));
