// 1993. Operations on Tree

/**
 * @param {number[]} parent
 */
var LockingTree = function (parent) {
  this.parent = parent;

  this.locked = new Array(parent.length).fill(0).map(() => null);

  //   parent[i] => [child]
  this.child = new Array(parent.length).fill(0).map(() => []);

  for (let i = 1; i < parent.length; i++) {
    this.child[parent[i]].push(i);
  }
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function (num, user) {
  if (this.locked[num]) {
    return false;
  }

  this.locked[num] = user;

  return true;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function (num, user) {
  if (this.locked[num] !== user) {
    return false;
  }

  this.locked[num] = null;

  return true;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function (num, user) {
  let i = num;

  // check whether It does not have any locked ancestors and The node is unlocked
  while (i !== -1) {
    if (this.locked[i]) {
      return false;
    }
    i = this.parent[i];
  }

  //   check whether it has at least one locked descendant

  let lockedCount = 0;
  let queue = [num];

  while (queue.length) {
    const currNode = queue.shift();

    if (this.locked[currNode]) {
      this.locked[currNode] = null;
      lockedCount += 1;
    }

    queue.push(...this.child[currNode]);
  }

  if (lockedCount > 0) {
    this.locked[num] = user;
  }

  return lockedCount > 0;
};
/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */

// You are given a tree with n nodes numbered from 0 to n - 1

// You want to design a data structure that allows users to lock, unlock, and upgrade nodes in the tree.

// Lock: Locks the given node for the given user and prevents other users from locking the same node.

// Unlock: Unlocks the given node for the given user. You may only unlock a node using this function if it is currently locked by the same user.

// Upgrade: Locks the given node for the given user and unlocks all of its descendants regardless of who locked it. You may only upgrade a node if all 3 conditions are true:
// You may only upgrade a node if all 3 conditions are true:
//  The node is unlocked
//  It has at least one locked descendant (by any user), and
//  It does not have any locked ancestors.
