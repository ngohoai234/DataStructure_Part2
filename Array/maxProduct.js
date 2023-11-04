const maxProduct = (s) => {
  const n = s.length;
  let res = 0;
  const pali = {};
  const length = 1 << n; // 2 ^ n

  for (let mask = 1; mask < length; mask++) {
    let subSequence = '';
    for (let i = 0; i < n; i++) {
      //   check whether mask includes in range
      if (mask & (1 << i)) {
        subSequence += s[i];
      }
    }
    if (subSequence === subSequence.split('').reverse().join('')) {
      pali[mask] = subSequence.length;
    }
  }

  for (const m1 in pali) {
    for (const m2 in pali) {
      // disjoint
      if ((m1 & m2) === 0) {
        res = Math.max(res, pali[m1] * pali[m2]);
      }
    }
  }
  return res;
};

console.log(maxProduct('leetcodecom'));
