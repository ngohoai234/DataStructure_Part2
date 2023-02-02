const productArray = (arr) => {
  //    1 2 3 4 5
  //    1 -> 2 * 3 * 4 * 5
  //    2 -> 1 * 3 * 4 * 5
  //    3 => 1 * 2 * 4 * 5
  //    4 => 1 * 2 * 3 * 5
  //    5 => 1 * 2 * 3 * 4
  //    prefix -> 1    1   2   6 24
  //    postfix-> 120 60  20   5 1

  let pre_fix = 1;
  let post_fix = 1;
  const n = arr.length;
  let res = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    res[i] = pre_fix;
    pre_fix = arr[i] * pre_fix;
  }
  for (let i = n - 1; i >= 0; i--) {
    res[i] = res[i] * post_fix;
    post_fix = arr[i] * post_fix;
  }

  return res;
};

console.log(productArray([1, 2, 3, 4, 5]));
