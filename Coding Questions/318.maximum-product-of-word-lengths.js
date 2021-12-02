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
    let max = -Infinity;
    for (let i = 0; i < words.length; i++) {
        let curWord = words[i].split("");
        let nextWord = words[i + 1].split("");
        for (let j = 0; j < curWord.length; j++) {
            if (nextWord.includes(curWord[j])) break;
        }
        max = Math.max(curWord.length * nextWord.length);
    }
    console.log(max);
    return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
