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
    var result = [];
    var leftMult = 1;
    var rightMult = 1;
    //multiply to the right
    for (var i = nums.length - 1; i >= 0; i--) {
        result[i] = rightMult;
        rightMult *= nums[i];
    }
    //multiply to the left
    for (var j = 0; j < nums.length; j++) {
        result[j] *= leftMult;
        leftMult *= nums[j];
    }
    return result;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
