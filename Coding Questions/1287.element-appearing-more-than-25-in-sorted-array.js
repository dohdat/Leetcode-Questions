/*
 * @lc app=leetcode id=1287 lang=javascript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let map = new Map();
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    let temp = arr.length / 4;
    for (let [key, value] of map) {
        if (value > temp) {
            res = key;
        }
    }

    return res;
};
// @lc code=end
