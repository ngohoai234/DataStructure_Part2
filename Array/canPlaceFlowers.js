var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const element = flowerbed[i];
    const prev = flowerbed[i - 1] || 0;
    const next = flowerbed[i + 1] || 0;
    if (element === 0 && prev === 0 && next === 0) {
      flowerbed[i] = 1;
      n--;
    }
    if (n === 0) {
      return true;
    }
  }
  return n <= 0 ? true : false;
};
