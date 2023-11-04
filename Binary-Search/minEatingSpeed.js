/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  const canEat = (eat) => {
    let times = 1;
    for (const pile of piles) {
      times += Math.ceil(pile / eat);
    }
    debugger;

    return times <= h;
  };
  while (l <= r) {
    const eat = Math.floor((l + r) / 2);

    if (canEat(eat)) {
      r = eat - 1;
      res = eat;
    } else {
      l = eat + 1;
    }
  }

  return res;
};

// piles[i]

// Koko can decide her bananas-per-hour eating speed of k

// she chooses some pile of bananas and eats k bananas from that pile

// Return the minimum integer k such that she can eat all the bananas within h hours.

// 3 6 7 11

// range => [max, total]

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
