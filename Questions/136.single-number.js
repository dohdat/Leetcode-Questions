/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//given a non-empty array of intergers, return the single integer that appears only once
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end
