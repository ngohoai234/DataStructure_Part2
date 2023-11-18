/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode();

  dummy.next = head;

  let l = dummy;
  let r = head;

  while (r && n > 0) {
    n--;
    r = r.next;
  }

  while (r) {
    r = r.next;
    l = l.next;
  }

  //   delete

  l.next = l.next.next;

  return dummy.next;
};
