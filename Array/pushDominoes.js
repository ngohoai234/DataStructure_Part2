/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const n = dominoes.length;
  const forces = new Array(n).fill(0);
  let force = 0;

  // populate from the left to right
  for (let i = 0; i < dominoes.length; i++) {
    const element = dominoes[i];

    if (element === 'R') {
      force = n;
    } else if (element === 'L') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] += force;
  }
  force = 0;

  for (let i = n - 1; i >= 0; i--) {
    const element = dominoes[i];

    if (element === 'L') {
      force = n;
    } else if (element === 'R') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force;
  }

  return forces
    .map((f) => {
      if (f === 0) {
        return '.';
      }
      return f > 0 ? 'R' : 'L';
    })
    .join('');
};

console.log(pushDominoes('.L.R...LR..L..'));
