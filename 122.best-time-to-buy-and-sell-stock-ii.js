/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = Number.MIN_VALUE;
    for (let i = 0; i < prices.length; i++) {
        for (let j = 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// 5-1 = 4, 6-3 = 3, 4 + 3 = 7
// Input: prices = [1,2,3,4,5]
// Output: 4
// Input: prices = [7,6,4,3,1]
// Output: 0
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
