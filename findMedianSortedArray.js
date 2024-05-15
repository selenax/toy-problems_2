// 4. Median of Two Sorted Arrays
//NOTE: HARD

// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

//TIP: median: if list is odd, median is the middle  value. if list is even, median is avg of the 2 middle values

//brute force - Time:O(nlogn) Space:O(n)
// const findMedianSortedArrays = (nums1, nums2) => {
//   let sorted = [...nums1, ...nums2].sort((a, b) => a - b); //[1,2,3]
//   let mid = Math.floor(sorted.length / 2);
//   if (sorted.length % 2 !== 0) {
//     return sorted[mid];
//   } else {
//     return (sorted[mid - 1] + sorted[mid]) / 2;
//   }
// };

//Time:O(n)
const findMedianSortedArrays = (nums1, nums2) => {
  let merged = [];
  let i = 0;
  j = 0;

  //compare values and add to merged until reach the end of one or both of the arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  //add remaining values from the array that didn't finish looping above
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  //find median
  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 !== 0) {
    return merged[mid];
  } else {
    return (merged[mid - 1] + merged[mid]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); //2
console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.5
