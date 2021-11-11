/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
// Given a list of non-negative integers nums, arrange them such that they form the largest number.
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        return `${b}${a}` - `${a}${b}`;
    });
    let res = nums[0] === 0 ? "0" : nums.join("");
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = largestNumber;
// @after-stub-for-debug-end
