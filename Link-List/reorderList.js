/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse slow
  let second = slow.next;
  let prev = (slow.next = null);

  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;

  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
