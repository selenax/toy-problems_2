// 1249. Minimum Remove to Make Valid Parentheses
// Medium

// https://leetcode.com/discuss/interview-question/124551/balance-parenthesis-in-an-alphanumeric-string

//NOTE: facebook
// Given a string str consisting of parentheses (, ) and alphanumeric characters. Remove minimum number of paranthesis to make the string valid and return any valid result. In a valid string for every opening/closing parentheses there is a matching closing/opening one.

// Example 1:

// Input: "ab(a(c)fg)9)"
// Output: "ab(a(c)fg)9" or "ab(a(c)fg9)" or "ab(a(cfg)9)"
// Example 2:

// Input: ")a(b)c()("
// Output: "a(b)c()"
// Example 3:

// Input: ")("
// Output: ""
// Example 4:

// Input: "a(b))"
// Output: "a(b)"
// Example 5:

// Input: "(a(c()b)"
// Output: "a(c()b)" or "(ac()b)" or "(a(c)b)"
// Example 6:

// Input: "(a)b(c)d(e)f)(g)"
// Output: "(a)b(c)d(e)f(g)"

//Time:O(N) Space:O(N)
const minRemoveToMakeValid = (str) => {
  const arrStr = str.split('');
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      if (!stack.length) {
        arrStr[i] = '';
      } else {
        stack.pop();
      }
    }
  }

  for (let i of stack) arrStr[i] = '';

  return arrStr.join('');
};

console.log(minRemoveToMakeValid('(a(c()b)'));
console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
console.log(minRemoveToMakeValid('))(('));
console.log(minRemoveToMakeValid('ab(a(c)fg)9)'));
console.log(minRemoveToMakeValid(')a(b)c()('));
console.log(minRemoveToMakeValid(')('));
