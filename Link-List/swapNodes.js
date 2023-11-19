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
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let curr = head;

  while (curr && k > 1) {
    curr = curr.next;
  }
  let l = curr;
  let r = head;

  while (curr.next) {
    r = r.next;
    curr = curr.next;
  }
  [l.value, r.value] = [r.value, l.value];

  return head;
};
