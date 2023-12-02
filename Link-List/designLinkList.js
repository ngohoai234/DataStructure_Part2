var ListNode = function (val, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
};

var MyLinkedList = function () {
  this.left = new ListNode(0);
  this.right = new ListNode(0);

  this.left.next = this.right;
  this.right.prev = this.left;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this.left.next;

  while (curr && index > 0) {
    curr = curr.next;
    index -= 1;
  }

  return index === 0 && curr && curr !== this.right ? curr.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new ListNode(val);
  const next = this.left.next;
  const prev = this.left;

  prev.next = newNode;
  next.prev = newNode;

  newNode.prev = prev;
  newNode.next = next;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new ListNode(val);
  const next = this.right;
  const prev = this.right.prev;

  prev.next = newNode;
  next.prev = newNode;

  newNode.prev = prev;
  newNode.next = next;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let curr = this.left.next;

  while (curr && index > 0) {
    curr = curr.next;
    index--;
  }

  if (index === 0 && curr) {
    const newNode = new ListNode(val);
    const next = curr;
    const prev = curr.prev;

    prev.next = newNode;
    next.prev = newNode;

    newNode.prev = prev;
    newNode.next = next;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let curr = this.left.next;

  while (curr && index > 0) {
    curr = curr.next;
    index--;
  }

  if (index === 0 && curr && curr !== this.right) {
    const next = curr.next;
    const prev = curr.prev;

    next.prev = prev;
    prev.next = next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();

obj.addAtHead(1);
