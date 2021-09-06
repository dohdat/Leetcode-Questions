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
var isValid = function (s) {
    let hashMap = [{ "(": ")" }, { "[": "]" }, { "{": "}" }];
    let arr = s.split(" ");
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i]);
    }
    return resultArr;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
