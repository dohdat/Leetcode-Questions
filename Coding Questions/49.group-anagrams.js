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
    let hash = {};
    for (let i of strs) {
        let temp = i.split("").sort().join("");
        hash[temp] ? hash[temp].push(i) : (hash[temp] = [i]);
    }
    return Object.values(hash);
};

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end
