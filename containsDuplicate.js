// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//input: array
//output: boolean -
// !duplicate = true
// !unique = false
//Time Complexity: O(N)
var containsDuplicate = function (nums) {
  //loop overy array
  //add value to hash as key
  let hash = {};
  for (let val of nums) {
    //if curr value already exist in hash, return true
    if (hash[val] !== undefined) {
      return true;
    } else {
      hash[val] = val;
    }
  }
  //at end of array return false because all values are unique
  return false;
};

console.log(containsDuplicate([0, 4, 5, 0, 3, 6])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
