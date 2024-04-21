// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// input: array of nums
// output: num

//brute force Time:O(n^2) Space: O(n)
//2 loops, outer loop as anchor, while inner loop iterate and add values of array and keep track of sum + max sum
// const maxSubArray = (nums) => {
//   let sum = 0;
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     //reset sum
//     sum = nums[i];
//     //if initial value is the largest
//     max = Math.max(sum, max);
//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j];
//       max = Math.max(sum, max);
//     }
//   }
//   return max;
// };

// refactor Time:O(n) Space:O(1)
// const maxSubArray = (nums) => {
//   let max = nums[0];
//   let sum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum <= nums[i]) {
//       sum = nums[i];
//       max = Math.max(max, sum);
//     }
//     max = Math.max(max, sum);
//   }
//   return max;
// };

// refactor from above solution
const maxSubArray = (nums) => {
  let max = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    //compare sum and curr value, assign higher value to become the new sum
    sum = Math.max(nums[i] + sum, nums[i]);
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([1])); //1
console.log(maxSubArray([5, 4, -1, 7, 8])); //23
console.log(maxSubArray([-1, 0, -2])); //0
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])); //6
