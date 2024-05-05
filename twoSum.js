// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(arr, k) {
  let hash = {};
  for (let i in arr) {
    let diff = k - arr[i]; //looks for the difference since it will be in remaining array
    if (hash[[arr[i]]]) {
      return [hash[arr[i]], i];
    } else {
      hash[diff] = i;
    }
  }
}

console.log(twoSum([3, 2, 4], 6));

//TASK: find all pairs
function twoSum2(arr, k) {
  const hash = {};
  const result = [];
  for (let val of arr) {
    const diff = k - val;
    if (!hash.hasOwnProperty(val)) {
      hash[diff] = val; //{8:1}
    } else {
      result.push([hash[val], val]);
    }
  }
  return result;
}

console.log(twoSum2([1, 2, 3, 4, 6, 7, 8, 9], 9));
//output: [[6,3],[7,2],[8,1]]

//TASK: find pair with smallest index
[1, 5, 0, 1, 2, 7, 8, 6], 13;
//output: [1,6]
function twoSum3(arr, k) {
  let hash = {};

  for (let i in arr) {
    const diff = k - arr[i];
    if (!hash.hasOwnProperty([arr[i]])) {
      hash[diff] = i;
    } else {
      return [i, hash[arr[i]]];
    }
  }
}

console.log(twoSum3([1, 5, 0, 1, 2, 7, 8, 6], 13));
