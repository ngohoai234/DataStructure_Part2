/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let l = 0,
    r = m;

  while (l <= r) {
    const partitionA = Math.floor((l + r) / 2);
    const partitionB = Math.floor((m + n + 1) / 2) - partitionA;

    const maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
    const minRightA = partitionA === m ? Infinity : nums1[partitionA];

    const maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
    const minRightB = partitionB === n ? Infinity : nums2[partitionB];

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      r = partitionA - 1;
    } else {
      l = partitionA + 1;
    }
  }
};

//

// 1 2 3 | 4 5 6 7 8

// 1 2 | 3 4

console.log(findMedianSortedArrays([], [1]));
