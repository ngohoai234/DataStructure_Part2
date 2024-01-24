/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  if (s.length > 12) {
    return res;
  }

  const bt = (i, dots, currIp) => {
    if (dots === 4 && i === s.length) {
      res.push(currIp.slice(0, currIp.length - 1));
      return;
    }

    if (dots >= 4) {
      return;
    }

    const length = Math.min(i + 3, s.length);

    for (let j = i; j < length; j++) {
      if (Number(s.slice(i, j + 1)) >= 256 || (i !== j && s[i] === '0')) {
        break;
      }

      bt(j + 1, dots + 1, currIp + s.slice(i, j + 1) + '.');
    }
  };

  bt(0, 0, '');

  return res;
};

console.log(restoreIpAddresses('101023'));
