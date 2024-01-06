var TrieNode = function () {
  this.children = {};
  this.endOfWord = false;
};

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
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
WordDictionary.prototype.search = function (word) {
  const bfs = (node, start) => {
    if (start === word.length) {
      return node.endOfWord;
    }

    if (word[start] === '.') {
      for (const child of Object.values(node.children)) {
        if (bfs(child, start + 1)) {
          return true;
        }
      }
      return false;
    }

    return (
      node.children.hasOwnProperty(word[start]) &&
      bfs(node.children[word[start]], start + 1)
    );
  };

  return bfs(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary();

obj.addWord('abc');
debugger;
console.log(obj);
