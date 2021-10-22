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
    let maxProfit = 0;
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let transaction = 0;
    for (let i = 0; i < prices.length; i++) {
        if (transaction <= 2) {
            minPrice = Math.min(minPrice, prices[i]);
            maxPrice = Math.max(maxPrice, prices[i]);
            maxProfit += maxPrice - minPrice;
            transaction++;
        }
    }
    console.log(maxProfit);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
