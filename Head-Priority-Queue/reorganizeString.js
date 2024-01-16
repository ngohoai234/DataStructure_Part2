import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const counter = {};
  const maxHeap = new MaxPriorityQueue();
  for (const character of s) {
    counter[character] |= 0;
    counter[character] += 1;
  }
  for (const [character, count] of Object.entries(counter)) {
    maxHeap.enqueue([count, character], count);
  }
  let prev = null;
  let res = '';
  while (maxHeap.size()) {
    let [count, character] = maxHeap.dequeue().element;

    count -= 1;
    res += character;

    if (prev) {
      maxHeap.enqueue(prev, prev[0]);
      prev = null;
    }

    if (count !== 0) {
      prev = [count, character];
    }
  }

  return res.length === s.length ? res : '';
};

// a: 3
// b: 1

//

console.log(reorganizeString('aab'));
