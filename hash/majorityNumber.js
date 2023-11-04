// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

const majorityElement = (nums) => {
  let res = 0,
    count = 0;

  for (const num of nums) {
    if (count === 0) {
      res = num;
    }
    if (res === num) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};

const n = [3, 2, 3];
console.log(majorityElement(n));
