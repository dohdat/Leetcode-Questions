/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var buy = 2147483647; // 2^31 - 1
    var free = 0,
        last = 0,
        now = 0;
    prices.forEach((x) => {
        now = Math.max(last, x - buy);
        buy = Math.min(buy, x - free);
        free = last;
        last = now;
    });
    return now;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
