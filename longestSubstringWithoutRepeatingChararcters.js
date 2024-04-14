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
  // create str
  // create variable of max to keep track of str's length

  let subStr = '';
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    // accumulate of unique char on each iteration
    if (subStr.indexOf(str[i]) === -1) {
      subStr += str[i];
      // compare max to str length, if length is bigger, assign length to be next max
      max = Math.max(max, subStr.length);
    } else {
      // if char already exist, restart str at the previous index of curr char
      // curr index minus substr length and add 1 to account for index
      // account for current substr's length
      //   console.log(str.substring(1));
      subStr = subStr.substring(i - subStr.length + 1); //1 - 1 + 1
      console.log(subStr, i, '💕');
      max = Math.max(max, subStr.length);
    }
  }
  // return max after loop finishes.
  return max;
};

// console.log(lengthOfLongestSubstring('ddwfded')); //wfde 4
console.log(lengthOfLongestSubstring('aab')); //ab 2
