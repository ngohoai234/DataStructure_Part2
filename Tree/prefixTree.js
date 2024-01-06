// 208. Implement Trie (Prefix Tree)

var TrieNode = function () {
  this.children = {};
  this.endOfWord = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;

  for (const c of word) {
    if (!curr.children.hasOwnProperty(c)) {
      // create a new sub child
      curr.children[c] = new TrieNode(c);
    }
    curr = curr.children[c];
  }

  // mark the end of word to handle search
  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.root;

  for (const c of word) {
    if (!curr.children.hasOwnProperty(c)) {
      return false;
    }

    curr = curr.children[c];
  }

  return curr.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;

  for (const c of prefix) {
    if (!curr.children.hasOwnProperty(c)) {
      return false;
    }

    curr = curr.children[c];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// children = {}

// endOfWord = false
