const productExceptSelf = function (arr) {
  const result = [];

  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    result[i] = prefix;
    prefix = prefix * num;
  }

  //   post fix

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    result[i] = result[i] * postfix;
    postfix = num * postfix;
  }
  return result;
};
