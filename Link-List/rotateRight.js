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
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }

  let length = 1,
    tail = head;

  while (tail.next) {
    tail = tail.next;
    length += 1;
  }

  tail.next = head;
  k = k % length;

  if (k) {
    // 1 2 3
    // t
    for (let i = 0; i < length - k; i++) {
      tail = tail.next;
    }
  }
  const newNode = tail.next;
  tail.next = null;

  return newNode;
};

//  0 1 2
//  t n
