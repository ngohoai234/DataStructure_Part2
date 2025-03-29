/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.split('/');

  const st = [];

  for (const character of path) {
    if (character === '' || character === '.') {
      continue;
    }

    if (character === '..') {
      st.pop();
    } else {
      st.push(character);
    }
  }

  return '/' + st.join('/');
};
