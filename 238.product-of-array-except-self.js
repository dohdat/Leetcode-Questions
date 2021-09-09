/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const cloneArray = nums.slice(); // clone the array so we don't modify the original array
        cloneArray.splice(i, 1); // remove the ith element from the array
        result.push(multiply(cloneArray));
    }
    return result;
};
//helper function to multiply all elements in an array
const multiply = (array) => {
    var sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum *= array[i];
    }
    return sum;
};

productExceptSelf([-1, 1, 0, -3, 3]);
// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
