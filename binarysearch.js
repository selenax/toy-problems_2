// 704. Binary Search
// Easy
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Time:O(log n) Space:O(1)
// const search = (arr, k) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);

//   while (start <= end && arr[mid] !== k) {
//     if (arr[mid] < k) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     mid = Math.floor((start + end) / 2);
//   }
//   return arr[mid] === k ? mid : -1;
// };

// refactor - recursion
const search = (arr, k, start, end) => {
  let mid = Math.floor((start + end) / 2);

  //base case
  if (start > end) return -1;
  if (arr[mid] === k) return mid;

  if (arr[mid] < k) {
    return search(arr, k, (start = mid + 1), end);
  } else if (arr[mid] > k) {
    return search(arr, k, start, (end = mid - 1));
  }
  return search(arr, k, 0, arr.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 2)); //-1
console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(search([-1, 0, 3, 5, 9, 12], 5)); //3
