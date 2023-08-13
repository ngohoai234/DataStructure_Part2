/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let asteroid of asteroids) {
    while (stack.length && asteroid < 0 && stack.at(-1) > 0) {
      let diff = asteroid + stack.at(-1);
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        asteroid = 0;
      } else {
        asteroid = 0;
        stack.pop();
      }
    }
    if (asteroid) {
      stack.push(asteroid);
    }
  }

  return stack;
};

// input: array asteroids

// positive => move right

// negative => left

// rules:
//      the smaller one will explode
//      both are the same size, both will explode
//      two asteroids moving in the same direction will never meet

// Example: 5, 10, -5
//          5 and 10 the same direction

// Ideal use stack
//

console.log(asteroidCollision([5, 10, -5]));

// -2 -1 the same siz
