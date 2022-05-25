/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// count the number of palindromic substrings
var countSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += helper(s, i, i);
        count += helper(s, i, i + 1);
    }
    return count;
};

var helper = function (s, start, end) {
    let count = 0;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        count++;
        start--;
        end++;
    }
    return count;
};

// @lc code=end

// @lc code=end

// @after-stub-for-debug-begin
module.exports = countSubstrings;
// @after-stub-for-debug-end
