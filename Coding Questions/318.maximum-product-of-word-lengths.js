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
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        let cur = words[i].split("");
        console.log("cur:", cur);
        for (let j = i + 1; j < words.length; j++) {
            let next = words[j].split("");
            console.log("next:", next);
            let intersect = next.filter((v) => cur.includes(v));
            console.log("intersect:", intersect);
            max = intersect.length === 0 ? Math.max(max, cur.length * next.length) : -Infinity;
            console.log("max:", max);
        }
    }
    console.log(max);
    return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
