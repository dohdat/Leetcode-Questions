/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//first loop: scan the surrounding for O and change them to T only in the corners
//second loop: if the el is O, then change to X
var solve = function (board) {
    if (board.length === 0) return null;
    let rows = board.length;
    let cols = board[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "O" && (r == 0 || r == rows - 1 || c == 0 || c == cols - 1)) {
                dfs(board, r, c);
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X";
            } else if (board[r][c] === "T") {
                board[r][c] = "O";
            }
        }
    }
    return board;
};

function dfs(board, r, c) {
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] == "X" || board[r][c] == "T") {
        return;
    }
    board[r][c] = "T";
    dfs(board, r + 1, c);
    dfs(board, r - 1, c);
    dfs(board, r, c + 1);
    dfs(board, r, c - 1);
    return;
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solve;
// @after-stub-for-debug-end
