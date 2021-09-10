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
    let result = [];
    result = nums.map((cur, i, arr) => {
        let temp = arr.slice(); //clone the original array
        temp.splice(i, 1); // remove the ith element from the array
        return temp.reduce((prod = 1, num) => prod * num);
    });
    return result;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
