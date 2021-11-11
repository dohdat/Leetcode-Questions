/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = [];
    let left = 1;
    let right = 1;
    //multiply to the right
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = right;
        right *= nums[i];
    }
    //multiply to the left
    for (let i = 0; i < nums.length; i++) {
        res[i] *= left;
        left *= nums[i];
    }
    return res;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
