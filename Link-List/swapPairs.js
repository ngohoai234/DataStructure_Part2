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
var swapPairs = function (head) {
  let dummy = new ListNode(0, head);

  let curr = head;
  let prev = dummy;

  while (curr && curr.next) {
    let next = curr.next;
    let nextNext = curr.next.next;

    // reverse the list
    next.next = curr;
    curr.next = nextNext;
    prev.next = next;

    // re-assign
    prev = curr;
    curr = nextNext;
  }

  return dummy.next;
};
