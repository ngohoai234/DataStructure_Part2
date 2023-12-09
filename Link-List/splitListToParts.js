/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let length = 0;
  let curr = head;
  const res = [];
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  //   the minimum element in one partition
  let baseLength = Math.floor(length / k);
  //   the remain of the list
  let remainder = length % k;
  curr = head;

  for (let i = 0; i < k; i++) {
    res.push(curr);
    const stop = baseLength + (remainder ? 1 : 0);

    for (let j = 1; j < stop; j++) {
      if (!curr) {
        break;
      }
      curr = curr.next;
    }

    if (curr) {
      const next = curr.next;
      curr.next = null;
      curr = next;
    }
    remainder = remainder ? remainder - 1 : 0;
  }

  return res;
};
