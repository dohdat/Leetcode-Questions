/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let stack = [];
    const map = { "(": ")", "[": "]", "{": "}" };
    for (let i of s) {
        if (map[i]) {
            stack.push(map[i]);
        } else {
            if (stack.pop() !== i) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end
module.exports = isValid;
// @after-stub-for-debug-end
