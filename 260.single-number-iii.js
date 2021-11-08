/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let hash = {};
    let res = [];
    nums.forEach((i) => (hash[i] = (hash[i] || 0) + 1));
    for (var i in hash) {
        if (hash[i] === 1) {
            res.push(i);
        }
    }
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end
