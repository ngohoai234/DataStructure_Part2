/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0, head);

  let leftPrev = dummy;
  let curr = head;
  let prev = null;

  for (let i = 1; i < left; i++) {
    leftPrev = curr;
    curr = curr.next;
  }

  // reverse
  for (let i = 0; i < right - left + 1; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
};
