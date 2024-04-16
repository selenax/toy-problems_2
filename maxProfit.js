/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

//input: array
//output: num
//fnd the smallest value and biggest value based on order of array
//return difference

//brute force O(N^2)
// const maxProfit = (prices) => {
//   let profit = 0;
//   let result = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       //sell - buy
//       result = prices[j] - prices[i];
//       profit = Math.max(profit, result);
//     }
//   }
//   return profit;
// };

const maxProfit = (prices) => {
  let buy = 0;
  let sell = 1;

  let profit = 0;
  // buy should never reach last index of prices
  // if buy < sell , check for profit & max
  // else sell < buy, assign buy = sell  since that's the new lower price
  // move sell to next index to check for the new minimum or log profit
  // after sell reaches end of array, it will return undefined
  while (buy < prices.length) {
    // console.log(prices[sell], sell);
    if (prices[buy] < prices[sell]) {
      // console.log(sell, '2');
      profit = Math.max(profit, prices[sell] - prices[buy]);
    } else {
      // console.log(sell, 'final', buy);
      buy = sell;
      console.log(buy, sell);
    }
    sell++;
  }
  return profit;
};

// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([1])); // 0
console.log(maxProfit([7, 3, 6])); //
