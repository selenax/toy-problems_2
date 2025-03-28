/* 33. Search in Rotated Sorted Array - Medium

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

//brute force: O(N) Time & O(1) Space
const search = (nums, target) => {
	for (let i in nums) {
		if (nums[i] === target) return i;
	}
	return -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //4
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); //-1

const search2 = (nums, target) => {};

const findPivot = (nums) => {
	let left = 0,
		right = nums.length - 1;

	if (nums[left] < nums[right]) return nums[left];

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] > nums[right]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return nums[left];
};

const binarySearch = (arr, k) => {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		console.log(`left=${arr[left]}, right=${arr[right]} `);

		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === k) {
			return mid;
		} else if (arr[mid] < k) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};

console.log(binarySearch([0, 1, 2, 3, 5, 6, 8], 8)); //6
// console.log('hello');
let arr = [0, 1, 2, 3, 5, 6, 8];
