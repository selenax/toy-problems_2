// 153. Find Minimum in Rotated Sorted Array
// Medium
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

//brute force: O(2N) => O(N)
const findMin = (nums) => {
  return Math.min(...nums);
};

//brute force: O(N)
const findMin2 = (nums) => {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  return min;
};

// console.log(findMin2([4,5,6,7,0,1,2]));

//O(log N)
// If array is sorted, then arr[lo] < arr[hi]
const findMin3 = (nums) => {
  /*
1. we can optimize the minimum element searching by using Binary Search where we start at the mid element and then decide whether to stop, to the left half or right half:
    - if arr[mid] > arr[high], inflection point is on the right side because in an ascending order the mid is smaller than the high. That means left half is sorted, we'll search the right half. 
      ** UPDATE low = mid + 1 
    - if arr[mid] <= arr[end], inflection is on the left side. Meaning right is sorted, target is in the left half. 
      ** UPDATE high = mid. (curr mid could be the target)
*/
  let lo = 0,
    hi = nums.length - 1;
  //goal of each iteration is to move closer to the inflection point because that's where the minimum value is
  while (lo < hi) {
    //return the lowest if array is already sorted
    if (nums[lo] < nums[hi]) return nums[lo];

    const mid = Math.floor((lo + hi) / 2);

    //this condition dictates if we are looking for max or min
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return nums[lo];
};
// console.log(findMin3([4, 5, 6, 7, 0, 1, 2]));

//TODO --- !! MAX !! in rotated sorted array?
const findMax = (nums) => {
  let lo = 0;
  let hi = nums.length - 1;

  //array already sorted or array len = 1
  if (nums[lo] < nums[hi]) return nums[hi];

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (nums[mid] < nums[lo]) {
      //inflection from lo...mid, search left, update hi to mid - 1
      hi = mid - 1;
    } else {
      //else mid > lo meaning lo->mid is sorted; search right and lo becomes mid
      lo = mid;
    }
  }
  return nums[lo];
};
console.log(findMax([4, 5, 6, 7, 0, 1, 2]));
console.log(findMax([4, 5, 6, 0, 1, 2]));
console.log(findMax([4, 0, 1, 2]));

/* 

ALGORITHM:
1. Using mid to compare and find the inflection that disrupts the ascending order
    by nature, [low........high]
                left       right
   
    HOWEVER, once rotated, ascending order is switched - 
                 [high......low]
                 left      right

2. To find min, based on rotated order, we compare mid to values on the right. 

3. To find max, based on rotated order, we compare mid to values on the left. 

*/
