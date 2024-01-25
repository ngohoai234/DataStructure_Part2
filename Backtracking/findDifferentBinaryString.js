// /**
//  * @param {string[]} nums
//  * @return {string}
//  */
// var findDifferentBinaryString = function (nums) {
//   const seen = new Set(nums);

//   const bt = (curr) => {
//     if (curr.length === nums.length) {
//       return seen.has(curr) ? '' : curr;
//     }

//     for (let j = 0; j < 2; j++) {
//       const value = bt(curr + String(j));
//       if (value) {
//         return value;
//       }
//     }

//     return '';
//   };
//   return bt('');
// };

// console.log(findDifferentBinaryString(['111', '110', '001']));

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let ans = '';

  for (let i = 0; i < nums.length; i++) {
    ans += nums[i][i] === '0' ? '1' : '0';
  }

  return ans;
};
