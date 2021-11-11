/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
<<<<<<< HEAD
    let res = [[]];
    for (let i = 1; i <= nums.length; i++) {
        dfs(nums.slice(0, i), res, 0);
    }
};

const dfs = (nums, res, len) => {
    res.push(nums[len]);
    len++;
    dfs(nums, res, len);
};

=======
    let res = [];
    generateSubsets([], res, 0, nums);
    return res;
};
const generateSubsets = (path, res, i, nums) => {
    res.push(path);
    for (let index = i; index < nums.length; index++) {
        generateSubsets([...path, nums[index]], res, index + 1, nums);
    }
};
>>>>>>> 4232567a018c12a84f25eaafc04ceceff530e3bf
// @lc code=end

// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end
