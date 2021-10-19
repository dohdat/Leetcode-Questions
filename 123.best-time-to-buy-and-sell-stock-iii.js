/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    prices = [3, 3, 5, 0, 0, 3, 1, 4];
    var maxTimes = 2;
    var maxProfit = 0;
    var profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (maxTimes <= 2 && prices[j] - prices[i] > 0) {
                profit += prices[j] - prices[i];
                if (profit === 4) {
                    console.log("prices[j]:", prices[j]);
                    console.log("prices[i]:", prices[i]);
                }
                maxTimes++;
                maxProfit = Math.max(profit, maxProfit);
            }
            maxTimes = 0;
            profit = 0;
        }
    }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
