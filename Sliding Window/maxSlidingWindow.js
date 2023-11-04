/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    queue.push(nums[i]);

    if (i >= k - 1) {
      res.push(queue[0]);
      if (queue.length && queue[0] === nums[i - k + 1]) {
        queue.shift();
      }
    }
  }
  return res;
};
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  2  3  6  7       3
//  1 [3  -1  -3] 2  3  6  7       3
//  1  3 [-1  -3  2] 3  6  7       2
//  1  3  -1 [-3  2  3] 6  7       2
//  1  3  -1  -3 [2  3  6] 7       6
//  1  3  -1  -3  2 [3  6  7]      7

// làm thế nào để lưu được giá trị lớn hiện tại
//

// trong trường hợp khi i++ mà remove đúng element đó thì sao

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
