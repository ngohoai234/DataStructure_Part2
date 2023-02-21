// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumbers = (arr) => {
  const n = arr.length;
  const intendedSum = (n * (n + 1)) / 2;

  return intendedSum - arr.reduce((sum, i) => (sum += i), 0);
};
