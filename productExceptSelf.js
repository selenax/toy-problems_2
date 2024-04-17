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
const productExceptSelf = (nums) => {
  let result = [];

  //using 2 loops, inner loop to multiply all the values that isn't current val
  //outer loop to keep track of the curr value, when i and j are the same, we skip and continue next iteration
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      product = product * nums[j];
    }
    result.push(product);
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
