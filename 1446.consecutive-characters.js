/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let hashMap = {};
    let arr = s.split("");
    arr.forEach((c) => (hashMap[c] = (hashMap[c] || 0) + 1));
    let maxVal = 0;
    for (let i in hashMap) {
    }
};

// @lc code=end

// @after-stub-for-debug-begin
// @after-stub-for-debug-end
