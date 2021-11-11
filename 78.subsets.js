/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [[]];
    for (let i = 1; i <= nums.length; i++) {
        dfs(nums.slice(0, i), res, 0);
    }
};

const dfs = (nums, res, len) => {
    res.push(nums[len]);
    len++;
    dfs(nums, res, len);
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end
