/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var result = false;
    var sortedS = s.split("").sort().join("");
    var sortedT = t.split("").sort().join("");
    if (sortedS === sortedT) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

// @lc code=end
isAnagram("rbtt", "cart");
// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end
