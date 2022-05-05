/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let log = [];
    let res = true;
    for (let i = 0; i < trips.length; i++) {
        let start = trips[i][1];
        let end = trips[i][2];
        let numPassengers = trips[i][0];
        log.push([start, numPassengers], [end, -numPassengers]);
    }

    log.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    let currCapacity = 0;
    for (let i = 0; i < log.length; i++) {
        let numPassengers = log[i][1];
        currCapacity += numPassengers;
        if (currCapacity > capacity) {
            res = false;
        }
    }
    return res;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = carPooling;
// @after-stub-for-debug-end
