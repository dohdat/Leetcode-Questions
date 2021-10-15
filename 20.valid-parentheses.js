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
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map[c]) {
            stack.push(map[c]);
        } else if (stack.pop() !== c) {
            return false;
        }
    }
    let result = stack.length === 0;
    return result;
};
isValid("((((())))");
// @lc code=end
module.exports = isValid;
// @after-stub-for-debug-end
