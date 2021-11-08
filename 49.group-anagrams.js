/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  ["eat","tea","tan","ate","nat","bat"]
//aet, aet, ant, aet, ant, abt
var groupAnagrams = function (strs) {
    let res = {};
    for (let i of strs) {
        let c = i.split("").sort().join("");
        res[c] ? res[c].push(i) : (res[c] = [i]);
    }
    return Object.values(res);
};

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end
