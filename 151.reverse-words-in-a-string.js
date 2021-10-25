/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let newStr = s.split(" ").reverse().join(" ").replace(/\s+/g, " ").trim();
    return newStr;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end
