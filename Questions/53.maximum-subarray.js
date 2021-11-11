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
function maxSubArray(nums) {
    //using Kadane algo
    let maxCur = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCur = Math.max(nums[i], maxCur + nums[i]);
        if (maxCur > maxGlobal) {
            maxGlobal = maxCur;
        }
    }
    return maxGlobal;
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
