// First solution: sort array and find difference value
// const subArray = (array) => {
//   const sortedArray = [...array].sort((a, b) => a - b);
//   const size = sortedArray.length;
//   let i = 0;
//   let j = size - 1;
//   while (i < size && array[i] === sortedArray[i]) {
//     i++;
//   }
//   while (j > 0 && array[j] === sortedArray[j]) {
//     j--;
//   }
//   if (i === size) {
//     return [-1, -1];
//   }

//   return [i, j];
// };

const subArray = (array) => {
  let min = Infinity;
  let max = -Infinity;
  array.forEach((element, index) => {
    if (element > array[index + 1] || element < array[index - 1]) {
      min = Math.min(min, element);
      max = Math.max(max, element);
    }
  });
  if (min === Infinity) {
    return [-1, -1];
  }
  let left = 0,
    right = array.length - 1;
  while (min > array[left]) {
    left++;
  }
  while (max < array[right]) {
    right--;
  }
  return [left, right];
};

console.log(subArray([1, 2, 3, 4]));
