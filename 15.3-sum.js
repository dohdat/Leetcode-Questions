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
    nums.sort((a, b) => a - b); //sort numbers
    let res = [];
    let memo = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let key = nums[i] + nums[start] + nums[end];
            if (key === 0) {
                let keyStr = [nums[i], nums[start], nums[end]].toString();
                if (!memo.has(keyStr)) {
                    res.push([nums[i], nums[start], nums[end]]);
                    memo.add(keyStr);
                }
                start++;
                end--;
            } else if (key < 0) {
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
