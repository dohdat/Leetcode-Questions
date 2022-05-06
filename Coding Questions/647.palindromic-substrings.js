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

var countSubstrings = function (s) {
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        count += expand(s, i, i);
        count += expand(s, i, i + 1);
    }

    return count;
};

var expand = function (s, left, right) {
    let count = 0;
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
        left--;
        right++;
        count++;
    }
    return count;
};
// @lc code=end

// @lc code=end

// @after-stub-for-debug-begin
module.exports = countSubstrings;
// @after-stub-for-debug-end
