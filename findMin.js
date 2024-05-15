// 153. Find Minimum in Rotated Sorted Array
// Medium

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

/** 
  NOTE:to get log n, we can divide array in half to see which direction to search. If m < r then it's insinuating this right chunk is in ascending order as value gets larger from m to r. 
  since we are looking for min, there are only 2 possibilities left. 
    1. Either mid is the min,
    2. OR min is on the left chunk and we need to search there
 
  NOTE:to goal is to identify an ascending pattern, and search the opposite side
**/

const findMin = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < arr[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[right];
};

//TIP: when rotating in ascending order, the largest value will always be on the left of the smallest value - unless it was rotated n times.
console.log(findMin([0, 1, 2, 3, 4, 5, 6])); //rotated 7 times
console.log(findMin([6, 0, 1, 2, 3, 4, 5])); //rotated 1 times
console.log(findMin([5, 6, 0, 1, 2, 3, 4])); //2x
console.log(findMin([4, 5, 6, 0, 1, 2, 3])); //3x
console.log(findMin([3, 4, 5, 6, 0, 1, 2])); //4x
console.log(findMin([2, 3, 4, 5, 6, 0, 1])); //5x
console.log(findMin([1, 2, 3, 4, 5, 6, 0])); //6x
console.log(findMin([0, 1, 2, 3, 4, 5, 6])); //7x

// console.log(findMin([3, 2, 1, 7, 6, 5, 4])); //not rotated in ascending order, 7 should b on left of 1
