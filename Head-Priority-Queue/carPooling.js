import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// solution priority queue

// /**
//  * @param {number[][]} trips
//  * @param {number} capacity
//  * @return {boolean}
//  */
// var carPooling = function (trips, capacity) {
//   // end, passengers
//   trips = trips.sort((a, b) => a[1] - b[1]);
//   const minHeap = new MinPriorityQueue();
//   let currPassengers = 0;

//   for (let t = 0; t < trips.length; t++) {
//     const [passengers, start, end] = trips[t];

//     while (minHeap.size() && minHeap.front().element[0] <= start) {
//       currPassengers -= minHeap.dequeue().element[1];
//     }

//     currPassengers += passengers;

//     if (currPassengers > capacity) {
//       return false;
//     }

//     minHeap.enqueue([end, passengers], end);
//   }

//   return true;
// };

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const stops = Array.from({ length: 1000 }, () => 0);
  let currPass = 0;

  for (const [passengers, start, end] of trips) {
    stops[start] += passengers;
    stops[end] -= passengers;
  }

  for (let n of stops) {
    currPass += n;

    if (currPass > capacity) {
      return false;
    }
  }

  return true;
};
