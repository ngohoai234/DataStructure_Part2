const minPair = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let min = Math.abs(arr1[0] - arr2[0]);
  let start = 0,
    end = 0;
  while (i < arr1.length && j < arr2.length) {
    const current = Math.abs(arr1[i] - arr2[j]);
    if (current < min) {
      min = current;
      start = i;
      end = j;
    }

    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return [arr1[start], arr2[end]];
};

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
console.log(minPair(arr1, arr2));
