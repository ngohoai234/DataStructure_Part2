const maxInWindow = (arr, k) => {
  const result = [],
    queue = [],
    n = arr.length;
  for (let i = 0; i < n; i++) {
    // keep max in window size
    while (queue.length && queue[queue.length - 1] < arr[i]) {
      queue.pop();
    }
    queue.push(arr[i]);
    if (i >= k - 1) {
      result.push(queue[0]);
    }
    // remove out of scope k
    if (queue.length && queue[0] === arr[i - k + 1]) {
      queue.shift();
    }
  }
  return result;
};

console.log(maxInWindow([1, 2, 3, 1, 1], 3));
