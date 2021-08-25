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
        //if nums[i] and nums[i-1] is the same, then skip
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; //skip same
        }
        let l = i + 1; //second index after i
        let r = nums.length - 1; //last index

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                //conditions to check for duplicates
                while (nums[l] === nums[l + 1]) {
                    l++;
                }
                while (nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
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
// Accepted
// 318/318 cases passed (148 ms)
// Your runtime beats 62.53 % of javascript submissions
// Your memory usage beats 76.61 % of javascript submissions (49.1 MB)
