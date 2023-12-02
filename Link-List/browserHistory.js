var ListNode = function (val, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
};

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.cur = new ListNode(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.cur.next = new ListNode(url, this.cur);
  this.cur = this.cur.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (this.cur.prev && steps > 0) {
    steps -= 1;
    this.cur = this.cur.prev;
  }

  return this.cur.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.cur.next && steps > 0) {
    steps -= 1;
    this.cur = this.cur.next;
  }

  return this.cur.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
