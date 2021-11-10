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
    s = "()))((";
    let array = s.split("");
    let map = { "(": ")" };
    let stack = [];
    for (let i of array) {
        if (map[i]) {
            stack.push(map[i]);
        } else {
            if (stack[stack.length - 1] !== i) {
                stack.pop();
            }
        }
    }
    console.log(stack);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minAddToMakeValid;
// @after-stub-for-debug-end
