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
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    return maxProfit;
};
// @lc code=end
maxProfit([7, 6, 4, 3, 1]);
// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
