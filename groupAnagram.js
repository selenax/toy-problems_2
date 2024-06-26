// # 49. Group Anagrams
// # Medium
// # Topics
// # Companies
// # Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// # An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// # Example 1:

// # Input: strs = ["eat","tea","tan","ate","nat","bat"]
// # Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// # Example 2:
// # Input: strs = [""]
// # Output: [[""]]
// # Example 3:
// # Input: strs = ["a"]
// # Output: [["a"]]

//Time: O(N*MlogM) n is # of words, m is length of word
//Space: O(N)
const groupAnagrams = (arr) => {
  const hash = {};
  for (let str of arr) {
    const newStr = str.split('').sort().join('');

    if (!hash[newStr]) {
      hash[newStr] = [str];
    } else {
      hash[newStr].push(str);
    }
  }
  return Object.values(hash);
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
