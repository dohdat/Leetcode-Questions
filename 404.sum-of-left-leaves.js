/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function (root) {
    return preOrder(root, false);
};

function preOrder(root, isLeft) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null && isLeft) {
        return root.val;
    }
    const left = root.left && preOrder(root.left, true);
    const right = root.right && preOrder(root.right, false);
    return left + right;
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = sumOfLeftLeaves;
// @after-stub-for-debug-end
