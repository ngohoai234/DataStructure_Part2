class ListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.left = new ListNode(0);
    this.right = new ListNode(0, this.left);
    this.left.next = this.right;
    this.map = new Map();
  }

  length() {
    return this.map.size;
  }

  pushRight(val) {
    const newNode = new ListNode(val, this.right.prev, this.right);
    this.map.set(val, newNode);
    this.right.prev = newNode;
    newNode.prev.next = newNode;
  }

  pop(val) {
    if (this.map.has(val)) {
      const deleteNode = this.map.get(val);
      const next = deleteNode.next;
      const prev = deleteNode.prev;
      next.prev = prev;
      prev.next = next;
      this.map.delete(val);
    }
  }

  popLeft() {
    const res = this.left.next.val;
    this.pop(res);
    return res;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.lfuCnt = 0;

  // key => map
  this.valMap = new Map();

  // key => count
  this.countMap = new Map();

  // cnt => listNode
  this.lstMap = new Map();
};

/**
 * @param {number} key
 * @return {void}
 */
LFUCache.prototype.counter = function (key) {
  const cnt = this.countMap.get(key) || 0;

  if (!this.lstMap.get(cnt)) {
    this.lstMap.set(cnt, new LinkList());
  }
  if (!this.lstMap.get(cnt + 1)) {
    this.lstMap.set(cnt + 1, new LinkList());
  }

  this.countMap.set(key, cnt + 1);

  this.lstMap.get(cnt).pop(key);
  this.lstMap.get(cnt + 1).pushRight(key);
  //   in case remove current cnt and the prevMin equal current count
  if (this.lfuCnt === cnt && this.lstMap.get(cnt).length() === 0) {
    this.lfuCnt += 1;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.valMap.has(key)) {
    return -1;
  }
  this.counter(key);

  return this.valMap.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }

  if (
    !this.valMap.has(key) &&
    this.capacity === this.valMap.size &&
    this.lstMap.has(this.lfuCnt)
  ) {
    const res = this.lstMap.get(this.lfuCnt).popLeft();
    this.valMap.delete(res);
    this.countMap.delete(res);
  }

  this.valMap.set(key, value);
  this.counter(key);
  this.lfuCnt = Math.min(this.lfuCnt, this.countMap.get(key));
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
