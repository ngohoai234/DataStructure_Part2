// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
  const hash = new Map();

  for (const str of strs) {
    let count = new Array(26).fill(0);
    for (const sub of str) {
      count[sub.charCodeAt() - 'a'.charCodeAt()]++;
    }
    const key = count.join('-');
    hash.has(key)
      ? hash.set(key, [...hash.get(key), str])
      : hash.set(key, [str]);
  }
  console.log(hash);
};

const v = ['bdddddddddd', 'bbbbbbbbbbc'];
groupAnagrams(v);
