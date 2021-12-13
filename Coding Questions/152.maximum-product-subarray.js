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
const maxProduct = (nums) => {
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let curMax = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            res = Math.max(res, curMax);
            curMax *= nums[j];
        }
        res = Math.max(res, curMax);
    }
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
