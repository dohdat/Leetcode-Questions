/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//sort the array first
//then use sliding window technique
//also remove duplicates using set
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [],
        memo = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let temp = nums[i] + nums[start] + nums[end];
            if (temp === 0) {
                let tempRes = [nums[i], nums[start], nums[end]].toString();
                if (!memo.has(tempRes)) {
                    memo.add(tempRes);
                    res.push([nums[i], nums[start], nums[end]]);
                }
                start++;
                end--;
            } else if (temp < 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return res;
};
// @lc code=end
//testing commit
// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
// use sliding window technique
// left index, right index
// becareful of duplicates
