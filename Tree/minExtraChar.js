// // 2707. Extra Characters in a String

// // minExtraChar : brute force solution

// /**
//  * @param {string} s
//  * @param {string[]} dictionary
//  * @return {number}
//  */
// var minExtraChar = function (s, dictionary) {
//   const words = new Set(dictionary);
//   const dp = {};

//   const dfs = (start) => {
//     if (start === s.length) {
//       return 0;
//     }

//     if (dp.hasOwnProperty(start)) {
//       return dp[start];
//     }

//     let res = 1 + dfs(start + 1);

//     for (let i = start; i < s.length; i++) {
//       const str = s.slice(start, i + 1);

//       if (words.has(str)) {
//         res = Math.min(res, dfs(i + 1));
//       }
//     }
//     dp[start] = res;

//     return res;
//   };

//   return dfs(0);
// };

class TrieNode {
  constructor() {
    this.children = {};

    this.isWord = false;
  }
}

const buildingTree = (dictionary) => {
  let root = new TrieNode();

  for (const word of dictionary) {
    let curr = root;

    for (const ch of word) {
      if (!curr.children.hasOwnProperty(ch)) {
        curr.children[ch] = new TrieNode();
      }
      curr = curr.children[ch];
    }

    curr.isWord = true;
  }

  return root;
};

// var minExtraChar = function (s, dictionary) {
//   const dp = {};

//   const trie = buildingTree(dictionary);

//   const dfs = (start) => {
//     if (start === s.length) {
//       return 0;
//     }

//     if (dp.hasOwnProperty(start)) {
//       return dp[start];
//     }

//     let res = 1 + dfs(start + 1);

//     let curr = trie;

//     for (let i = start; i < s.length; i++) {
//       const ch = s[i];
//       if (!curr.children.hasOwnProperty(ch)) {
//         break;
//       }

//       curr = curr.children[ch];

//       if (curr.isWord) {
//         res = Math.min(res, dfs(i + 1));
//       }

//       if (curr.isWord) {
//         res = Math.min(res, dfs(i + 1));
//       }
//     }

//     dp[start] = res;
//     return res;
//   };

//   return dfs(0);
// };

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const maxVal = s.length + 1;
  const dp = Array(s.length + 1).fill(maxVal);
  dp[0] = 0;
  debugger;

  const dictionarySet = new Set(dictionary);

  for (let i = 1; i <= s.length; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let l = 1; l <= i; l++) {
      if (dictionarySet.has(s.slice(i - l, i))) {
        dp[i] = Math.min(dp[i], dp[i - l]);
      }
    }
  }
  return dp[s.length];
};
