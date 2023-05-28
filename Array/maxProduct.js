const maxProduct = (s) => {
  const N = s.length;
  const pali = {}; // bitmask : length
  debugger;
  for (let mask = 1; mask < 1 << N; mask++) {
    // 1 << N == 2 ** N
    let subseq = '';
    for (let i = 0; i < N; i++) {
      if (mask & (1 << i)) {
        subseq += s[i];
      }
    }
    console.log(subseq, ' subseq');
    if (subseq === subseq.split('').reverse().join('')) {
      pali[mask] = subseq.length;
    }
  }
  let res = 0;
  for (let m1 in pali) {
    for (let m2 in pali) {
      if ((m1 & m2) === 0) {
        // disjoint
        res = Math.max(res, pali[m1] * pali[m2]);
      }
    }
  }
  return res;
};

console.log(maxProduct('leetcodecom'));
