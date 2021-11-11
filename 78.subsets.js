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
    let res = [];
    generateSubsets([], res, 0, nums);
    return res;
};
const generateSubsets = (path, res, i, nums) => {
    res.push(path);
    for (let index = i; index < nums.length; index++) {
        generateSubsets([...path, nums[index]], res, index + 1, nums);
    }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end
