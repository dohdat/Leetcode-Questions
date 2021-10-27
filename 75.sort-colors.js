/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    //using bubble sort to sort in place
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length - i - 1; j++) {
            //checking if the item at the present iteration is greater than the next iteration
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end
