// 1405. Longest Happy String

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const maxHeap = new MaxPriorityQueue();
  let res = '';

  for (const [cnt, character] of [
    [a, 'a'],
    [b, 'b'],
    [c, 'c'],
  ]) {
    if (cnt !== 0) {
      maxHeap.enqueue([cnt, character], cnt);
    }
  }

  while (maxHeap.size()) {
    let [cnt, character] = maxHeap.dequeue().element;

    if (
      res.length >= 2 &&
      res[res.length - 1] === res[res.length - 2] &&
      res[res.length - 2] === character
    ) {
      if (maxHeap.isEmpty()) {
        break;
      }
      let [cnt2, character2] = maxHeap.dequeue().element;
      res += character2;
      cnt2 -= 1;
      if (cnt2 !== 0) {
        maxHeap.enqueue([cnt2, character2], cnt2);
      }
    } else {
      res += character;
      cnt -= 1;
    }

    if (cnt !== 0) {
      maxHeap.enqueue([cnt, character], cnt);
    }
  }

  return res;
};

// A string s is called happy if it satisfies the following conditions:

// s only contains the letters 'a', 'b', and 'c'.

// s does not contain any of "aaa", "bbb", or "ccc" as a substring.

// s contains at most a occurrences of the letter 'a'.

// s contains at most b occurrences of the letter 'b'.

// s contains at most c occurrences of the letter 'c'.

console.log(longestDiverseString(1, 1, 7));
