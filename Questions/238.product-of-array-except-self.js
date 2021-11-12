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
    for (let i = 0; i < nums.length; i++) {
        let temp = [...nums];
        let index = temp.indexOf(nums[i]);
        temp.splice(index, 1);
        res.push(temp.reduce((prev, cur) => prev * cur));
    }
    return res;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
