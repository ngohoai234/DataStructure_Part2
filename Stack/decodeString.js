/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const regexNumber = new RegExp(/^\d+$/);
  const st = [];

  for (const character of s) {
    if (character !== ']') {
      st.push(character);
    } else {
      let digit = '';
      let subString = '';

      // find the close bracket

      while (st.length && st[st.length - 1] !== '[') {
        subString = st.pop() + subString;
      }

      st.pop(); // remove the open bracket

      while (st.length && regexNumber.test(st[st.length - 1])) {
        digit = st.pop() + digit;
      }

      st.push(subString.repeat(parseInt(digit)));
    }
  }

  return st.join('');
};
