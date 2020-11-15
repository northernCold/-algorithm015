/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @description
 * 1.子问题 (i, j) => (m, n)的最小路径和
 * 2.定义状态 dp[i][j] (i, j) => (m, n)的最小路径和
 * 3.状态方程 dp[i][j] = Min(dp[i][j - 1], dp[i - 1][j])
 */
function minPathSum(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let dp = grid;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j - 1 >= 0 && i - 1 >= 0) {
        dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
      } else if (j - 1 >= 0) {
        dp[i][j] += dp[i][j - 1];
      } else if (i - 1 >= 0) {
        dp[i][j] += dp[i - 1][j];
      }
    }
  }
  return dp[row - 1][col - 1];
};
// @lc code=end

