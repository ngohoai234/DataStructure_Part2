// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

const majorityElement = (nums) => {
  const countObj = {};
  let count = -1;
  let key = -1;
  for (const n of nums) {
    countObj[n] ? countObj[n]++ : (countObj[n] = 1);
    if (countObj[n] > count) {
      count = countObj[n];
      key = n;
    }
  }
  return key;
};

const n = [3, 2, 3];
console.log(majorityElement(n));
