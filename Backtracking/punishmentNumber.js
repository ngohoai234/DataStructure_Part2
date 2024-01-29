/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let res = 0;
  /**
   *
   * @param {number} start
   * @param {string} str
   * @param {number} num
   */
  const canPartition = (start, str, num) => {
    if (start === str.length) {
      return num === 0;
    }

    let partitionSum = 0;

    for (let i = start; i < str.length; i++) {
      partitionSum = partitionSum * 10 + Number(str[i]);
      if (partitionSum > num) {
        return false;
      }

      if (canPartition(i + 1, str, num - partitionSum)) {
        return true;
      }
    }

    return false;
  };

  for (let i = 1; i <= n; i++) {
    let sqr = i * i;
    if (canPartition(0, String(sqr), i)) {
      res += sqr;
    }
  }

  return res;
};

console.log(punishmentNumber(37));
