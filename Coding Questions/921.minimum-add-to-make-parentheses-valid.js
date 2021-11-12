/*
 * @lc app=leetcode id=921 lang=javascript
 *
 * [921] Minimum Add to Make Parentheses Valid
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let array = s.split("");
    let map = { "(": ")" };
    let stack = [];
    let res = 0;
    for (let i of array) {
        if (map[i] !== undefined) {
            stack.push(map[i]);
        } else {
            if (stack.pop() !== i) {
                res++;
            }
        }
    }
    return stack.length > 0 ? stack.length + res : res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minAddToMakeValid;
// @after-stub-for-debug-end
