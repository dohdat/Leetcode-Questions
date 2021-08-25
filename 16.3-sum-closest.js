/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//calculates all sums, then find the closest one to target
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            res.push(sum);
            l++;
            r--;
        }
    }
    let min = Number.MAX_VALUE;
    let hashMap = {};
    res.forEach((item) => ((min = Math.min(min, target - item)), (hashMap[item] = min)));
    let keys = Object.keys(hashMap);
    let closest = hashMap[keys[0]];
    console.log("hashMap:", hashMap);

    for (let i = 0; i < keys.length; i++) {
        let value = hashMap[keys[i]];
        closest = Math.min(closest, value);
    }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSumClosest;
// @after-stub-for-debug-end
