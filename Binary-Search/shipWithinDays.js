/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let l = Math.max(...weights);
  let r = weights.reduce((sum, val) => sum + val, 0);
  let res = r;
  debugger;

  const canShip = (c) => {
    let ships = 1;
    let currentCapacity = c;

    for (const weight of weights) {
      if (currentCapacity - weight < 0) {
        ships += 1;
        currentCapacity = c;
      }
      currentCapacity -= weight;
    }

    return ships <= days;
  };

  while (l <= r) {
    const capacity = Math.floor((l + r) / 2);

    if (canShip(capacity)) {
      res = Math.min(res, capacity);
      r = capacity - 1;
    } else {
      l = capacity + 1;
    }
  }
  return res;
};

console.log(shipWithinDays([1, 2, 3, 4, 5], 2));
