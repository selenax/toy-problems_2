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

//2 pointer - start and end
//when to move anchor? if adding next value sum is negative, anchor moves
//b4 anchor moves, subtract anchor index from curr sum so dont need to add all values again

const maxSubArray = (nums) => {
  let start = 0;
  let end = 0;
  let max = nums[0];
  let sum = 0;

  while (end < nums.length) {
    sum += nums[end];
    max = Math.max(max, sum);
    // console.log(max, 'max');
    end++;
    if (sum < 0) {
      sum -= nums[start];
      console.log(sum, start);

      start++;
      // console.log(sum, 'sum');
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
// console.log(maxSubArray([1])); //1
// console.log(maxSubArray([5, 4, -1, 7, 8])); //23  added all values
// console.log(maxSubArray([-1, 0, -2])); //0
// console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])); //6

//1-3=-2
//-3+4=1 + 2 + 1 = 4 - 5 = -1

//4-1=3 + 2 + 1 = 6
