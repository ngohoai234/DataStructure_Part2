/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let p1 = new ListNode(0);
  let p1_start = p1;
  let p2 = new ListNode(0);
  let p2_start = p2;
  while (head) {
    const next = head.next;
    head.next = null;
    if (head.val < x) {
      p1.next = head;
      p1 = p1.next;
    } else {
      p2.next = head;
      p2 = p2.next;
    }
    head = next;
  }

  if (p1_start.next) {
    p1.next = p2_start.next;
  } else {
    p1_start.next = p2_start.next;
  }

  return p1_start.next;
};
