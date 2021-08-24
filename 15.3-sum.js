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
    nums = [-2, 0, 0, 2, 2];
    nums.sort();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        //if nums[i] and nums[i-1] is the same, then skip
        if (nums[i] === nums[i - 1]) {
            continue; //skip same
        }
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
            }
        }
    }
    //testing
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
