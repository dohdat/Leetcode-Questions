/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let hashMap = {};
    nums.forEach((num) => (hashMap[num] = (hashMap[num] || 0) + 1));

    for (let i in hashMap) {
        if (hashMap[i] == 1) {
            return i;
        }
    }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end
