/** 
20. Valid Parentheses
Easy

Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
**/

const isValid = (str) => {
  let hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let stack = [];

  for (let i of str) {
    if (hash[i]) {
      stack.push(hash[i]); //[ ')', ]
    } else if (stack.pop() !== i) {
      return false;
    }
  }
  return stack.length == 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
