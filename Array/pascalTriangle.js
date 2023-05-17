const generate = function (numRows) {
  const result = [[1]];

  for (let i = 2; i <= numRows; i++) {
    const prevValue = result[i - 2];
    const newArr = [];
    newArr.push(1);
    for (let j = 1; j < prevValue.length; j++) {
      newArr.push(prevValue[j - 1] + prevValue[j]);
    }
    newArr.push(1);
    result.push(newArr);
  }
  return result;
};

console.log(generate(5));
