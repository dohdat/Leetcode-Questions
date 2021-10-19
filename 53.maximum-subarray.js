/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    A.forEach((i) => {
        prev = Math.max(prev + i, i);
        max = Math.max(max, prev);
    });

    return max;
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
