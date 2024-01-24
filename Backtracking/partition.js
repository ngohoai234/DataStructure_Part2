const isPali = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const subset = [];
  const bt = (i) => {
    debugger;
    if (i >= s.length) {
      res.push([...subset]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);

      if (!isPali(s, i, j)) {
        continue;
      }

      subset.push(sub);
      bt(j + 1);
      subset.pop();
    }
  };
  bt(0);
  return res;
};

console.log(partition('cdd'));
