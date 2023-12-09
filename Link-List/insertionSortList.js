/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let dummy = new ListNode(0);

  let curr = head;

  while (curr) {
    const next = curr.next;
    let p = dummy;
    let s = dummy.next;
    while (s && curr.val > s.val) {
      p = s;
      s = s.next;
    }

    p.next = curr;
    curr.next = s;

    curr = next;
  }

  return dummy.next;
};
