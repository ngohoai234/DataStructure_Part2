/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;

  let i = 0,
    j = n - 1;

  while (i < m && j < n) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
};

// Each row is sorted in non-decreasing order.

// The first integer of each row is greater than the last integer of the previous row.

// You must write a solution in O(log(m * n)) time complexity.
