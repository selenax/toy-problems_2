// 347. Top K Frequent Elements
// Medium
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

//Time: O(n) + O(n log n) = O(n log n)
//Space: O(n)
const topKFrequent = function (nums, k) {
  let hash = {};
  const result = [];

  for (let val of nums) {
    hash[val] = 1 + (hash[val] ?? 0);
  }

  let arr = Object.entries(hash).sort((a, b) => b[1] - a[1]); //[[1,3], [2,2], [3,1]]

  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3], 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
