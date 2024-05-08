// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

//Time: O(nlogn) Space:O(1)
// const isAnagram = function (s, t) {
// if(s.length!==t.length) return false;
//   const s1 = s.split('').sort().join('');
//   const t2 = t.split('').sort().join('');

//   return s1 === t2;
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let hashS = {};
  let hashT = {};

  for (let i in s) {
    hashS[s[i]] = 1 + (hashS[s[i]] ?? 0);
    hashT[t[i]] = 1 + (hashT[t[i]] ?? 0);
  }

  for (let key in hashS) {
    if (hashT[key] !== hashS[key]) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('anagram', 'nagaram'));
