/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = [
        [1, 4],
        [0, 4],
    ];
    let sort = false;
    if (intervals.length % 2 === 0) {
        for (let i = 0; i < intervals.length; i += 2) {
            if (intervals[i][0] > intervals[i + 1][0]) {
                sort = true;
            }
        }
    }
    let nums = !sort ? intervals.flat() : intervals.flat().sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            if (nums[i] >= nums[i + 2]) {
                nums.splice(nums.indexOf(nums[i]), 1);
                nums.splice(nums.indexOf(nums[i]), 1);
            }
        } else if (i % 2 === 1) {
            if (nums[i] >= nums[i + 1]) {
                nums.splice(nums.indexOf(nums[i]), 1);
                nums.splice(nums.indexOf(nums[i]), 1);
            }
        }
    }
    for (let i = 0; i < nums.length; i += 2) {
        let temp = [];
        temp.push(nums[i]);
        temp.push(nums[i + 1]);
        res.push(temp);
    }
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
