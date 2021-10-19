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

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i;
        let r = nums.length - 1;
        while (l < r) {
            sum = nums[l] + nums[r] + nums[i];
            if (sum === 0) {
                res.push([nums[l], nums[r], nums[i]]);
                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
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
