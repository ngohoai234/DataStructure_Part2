import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from '@datastructures-js/priority-queue';

var MedianFinder = function () {
  this.small = new MaxPriorityQueue();
  this.large = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.small.enqueue(num);

  //   make sure the small < large
  if (
    this.small.size() &&
    this.large.size() &&
    this.small.front().element > this.large.front().element
  ) {
    this.large.enqueue(this.small.dequeue().element);
  }

  //    [3, 2] vs []
  // => [3]    vs [2]
  if (this.small.size() > this.large.size() + 1) {
    this.large.enqueue(this.small.dequeue().element);
  }

  if (this.large.size() > this.small.size() + 1) {
    this.small.enqueue(this.large.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.small.size() > this.large.size()) {
    return this.small.front().element;
  }

  if (this.large.size() > this.small.size()) {
    return this.large.front().element;
  }
  return (this.small.front().element + this.large.front().element) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
