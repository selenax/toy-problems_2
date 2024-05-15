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

const findMedianSortedArray = (nums1, nums2) => {
  let sorted = [...nums1, ...nums2].sort((a, b) => a - b); //[1,2,3]
  let median = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[median];
  } else {
    return (sorted[median - 1] + sorted[median]) / 2;
  }
};

console.log(findMedianSortedArray([1, 3], [2]));
console.log(findMedianSortedArray([1, 2], [3, 4]));
