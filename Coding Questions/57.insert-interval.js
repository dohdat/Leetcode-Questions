/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for (let cur of intervals) {
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            res.push(cur);
            prev = cur;
        }
    }
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = insert;
// @after-stub-for-debug-end
