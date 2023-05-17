const longestCommonPrefix = function (strs) {
  const [max, ...rest] = strs.sort();
  let result = '';

  for (let i = 0; i < max.length; i++) {
    for (let j = 0; j < rest.length; j++) {
      if (max?.[i] !== rest[j]?.[i]) {
        return result;
      }
    }
    result += max[i];
  }
  return result;
};

console.log(longestCommonPrefix(['abc']));
