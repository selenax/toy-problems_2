// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//input: array of nums
//output: array of nums

//loop over array
//return an array, each returned value is the product of all the numbers in the array but the current element
//need to be O(n) and no division

//brute force Time:O(n^2) Space:O(n)
// const productExceptSelf = (nums) => {
//   let result = [];

//   //using 2 loops, inner loop to multiply all the values that isn't current val
//   //outer loop to keep track of the curr value, when i and j are the same, we skip and continue next iteration
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;
//       product = product * nums[j]
//     }
//     result.push(product);
//   }
//   return result;
// };

const productExceptSelf = (nums) => {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let result = [];
  //[1, 2, 3, 4]
  //[1, ]
  //[ ,1]

  //create 2 temp arrays containing partial products
  //1st array - prefix - i contains the products of all elements to right of i
  //2nd array - suffix - i contains the products of all elements to the left of i
  //result array is the product of each matching element in the temp arrays
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
