/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    //create a hashMap
    let hashMap = {};
    //create an array of chars
    let arr = s.split("");
    arr.forEach((c) => (hashMap[c] = (hashMap[c] || 0) + 1));
    let result = [];
    var keys = Object.keys(hashMap);
    keys.sort((a, b) => {
        return hashMap[b] - hashMap[a];
    });
    //how to sort hashmap
    for (let i = 0; i < keys.length; i++)
        for (let j = 0; j < hashMap[keys[i]]; j++) {
            result.push(keys[i]);
        }
    //convert array to string
    let resStr = result.join("");
    return resStr;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = frequencySort;
// @after-stub-for-debug-end
