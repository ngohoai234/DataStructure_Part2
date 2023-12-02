/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  debugger;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) {
      return slow;
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));

// 0 -> 1 -> 3 -> 2 -> 4 -> 2
