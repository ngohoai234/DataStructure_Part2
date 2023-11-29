/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const oldToCopy = new Map();

  oldToCopy.set(null, null);

  let curr = head;

  while (curr) {
    const copy = new Node();
    oldToCopy.set(curr, copy);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const copy = oldToCopy.get(curr);

    copy.next = oldToCopy.get(curr.next);
    copy.random = oldToCopy.get(curr.random);

    curr = curr.next;
  }

  return oldToCopy[head];
};
