class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.left = new ListNode(0, 0);
  this.right = new ListNode(0, 0);

  this.left.next = this.right;

  //   the most recent
  this.right.prev = this.left;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  this.remove(this.cache.get(key));

  this.insert(this.cache.get(key));

  return this.cache.get(key).value;
};

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.remove = function (node) {
  const prev = node.prev;
  const next = node.next;

  prev.next = next;
  next.prev = prev;
};

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.insert = function (node) {
  const next = this.right;
  const prev = this.right.prev;

  prev.next = node;
  next.prev = node;

  node.prev = prev;
  node.next = next;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }

  const newNode = new ListNode(key, value);

  this.cache.set(key, newNode);

  this.insert(this.cache.get(key));

  if (this.cache.size > this.capacity) {
    const deleteNode = this.left.next;
    this.remove(deleteNode);
    this.cache.delete(deleteNode.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
