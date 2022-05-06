/*
 * @lc app=leetcode id=1305 lang=javascript
 *
 * [1305] All Elements in Two Binary Search Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let arr1 = [];
    this.dfs(root1, arr1);
    let arr2 = [];
    this.dfs(root2, arr2);
    let arr = arr1.concat(arr2);
    arr.sort((a, b) => a - b);
    return arr;
};

var dfs = function (root, arr) {
    if (root === null) return;
    arr.push(root.val);
    this.dfs(root.left, arr);
    this.dfs(root.right, arr);
};

// @lc code=end
