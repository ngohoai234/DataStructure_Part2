const subArraySum = (arr, n, s) => {
  let prefix = 0;
  let i = 0,
    j = 0;
  while (j < n) {
    prefix += arr[j];
    debugger;
    j++;
    while (prefix > s && i < j) {
      prefix = prefix - arr[i];
      i++;
    }
    if (prefix === s) {
      return [i + 1, j];
    }
  }
  return [];
};

const arr = [
  142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191,
  43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30,
  24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83,
  130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71,
  30, 178, 174, 98, 113,
];
console.log(subArraySum(arr, arr.length, 655));
