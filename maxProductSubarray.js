// 152. Maximum Product Subarray
// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

//Time:O(N^2) Space:O(1)
// const maxProduct = (nums) => {
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     let product = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       //checks the current value of i is max
//       max = Math.max(max, product);
//       product *= nums[j];

//     }
//     //checks to see if last value is max since inner loop skips last index
//     max = Math.max(max, product);
//   }
//   return max;
// };

//refactor:
// key: negative value can become the largest if multiply with another (-)
// conditions to get the largest product:
// 1. curr value(+) * previous max product(+)
// 2. curr value(-) * previous min product(-)
// 3. curr value

const maxProduct = (nums) => {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = max * nums[i];
    max = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(nums[i], temp, min * nums[i]);
    result = Math.max(max, result);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4])); //6
console.log(maxProduct([-2, 0, -1])); //0
console.log(maxProduct([3, 2, -1, 3, -1])); // 18
console.log(maxProduct([-1, 2, 2, 3])); // 12
console.log(maxProduct([0, 2])); // 2
