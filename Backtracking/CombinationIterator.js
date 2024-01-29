const backtracking = (str, combination, n, i, res) => {
  if (combination.length === n) {
    res.push(combination.join(''));
    return;
  }

  for (let j = i; j < str.length; j++) {
    combination.push(str[j]);
    backtracking(str, combination, n, j + 1, res);
    combination.pop();
  }
};

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  const res = [];
  backtracking(characters, '', combinationLength, 0, res);

  this.combinations = res;
  this.curr = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.combinations[this.curr++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.curr >= this.combinations.length ? false : true;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
