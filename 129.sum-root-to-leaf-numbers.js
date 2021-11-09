/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//use dfs, using stack to traverse the tree
var sumNumbers = function (root) {
    let res = [];
    let arr = sumPathRecur(root, [], 0, res);
    console.log(arr);
    return arr.reduce((part_sum, a) => part_sum + a, 0);
};
function sumPathRecur(node, path, len, res) {
    if (node === null) {
        return;
    }
    path[len] = node.val;
    len++;
    if (node.left === null && node.right === null) {
        calSum(path, len, res);
    } else {
        sumPathRecur(node.left, path, len, res);
        sumPathRecur(node.right, path, len, res);
    }
    return res;
}
function calSum(arr, len, res) {
    let temp = parseInt(arr.join(""));
    res.push(temp);
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sumNumbers;
// @after-stub-for-debug-end
