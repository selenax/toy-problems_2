/* 
3. Longest Substring Without Repeating Characters - Medium
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 
*/

// input: string
// output: number
// O(N)
// find longest block of characters without any repeats, return length
const lengthOfLongestSubstring = (str) => {
  let hash = {};
  let max = 0;
  let start = 0;
  //assign current char as key, index as value
  //if duplicate char, start again from last index of char + 1
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (hash[currChar]) {
      start = hash[currChar] + 1;
    }
    hash[currChar] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring('ddwfed')); //4
console.log(lengthOfLongestSubstring('abccd')); //3
console.log(lengthOfLongestSubstring('pwwkew')); //3
console.log(lengthOfLongestSubstring('bbb')); //1
