/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (head_l1, head_l2) {
  let cary = 0,
    sum = 0,
    value = 0;
  let newNode = new ListNode(0);
  let start_node = newNode;

  while (head_l1 || head_l2) {
    const value_l1 = head_l1?.val ?? 0;
    const value_l2 = head_l2?.val ?? 0;

    sum = value_l1 + value_l2 + cary;
    value = sum % 10;
    cary = sum >= 10 ? 1 : 0;

    newNode.next = new ListNode(value);
    newNode = newNode.next;

    if (head_l1) {
      head_l1 = head_l1.next;
    }
    if (head_l2) {
      head_l2 = head_l2.next;
    }
  }

  if (cary) {
    newNode.next = new Node(1);
  }
  return start_node.next;
};
