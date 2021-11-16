/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// [2, 3, -2, 4];
var maxProduct = function (nums) {
    let localMax = nums[0];
    let globalMax = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], Math.abs(localMax * nums[i]));
        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }
    return nums.length < 2 ? nums[0] : globalMax;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
