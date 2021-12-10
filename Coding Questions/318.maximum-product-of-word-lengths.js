/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    const sortedWords = [...words].sort((a, b) => b.length - a.length);
    let max = 0;
    for (let i = 0; i < sortedWords.length; i++) {
        let cur = sortedWords[i].split("");
        for (let j = i + 1; j < sortedWords.length; j++) {
            let next = sortedWords[j].split("");
            let intersect = next.filter((v) => cur.includes(v));
            if (intersect.length === 0) {
                max = Math.max(max, cur.length * next.length);
            }
        }
    }
    return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
