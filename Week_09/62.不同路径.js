/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @description
 * 1.子问题 (i, j)到(m, n)需有几条不同的路径
 * 2.定义状态 dp[i][j]:(i, j)到(m, n)需有几条不同的路径
 * 3.状态方程 dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
 */
function uniquePaths(m, n) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i][m - 1] = 1;
  }
  for (let i = 0; i < m; i++) {
    dp[n - 1][i] = 1;
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (j + 1 < m && i + 1 < n) {
        dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
      } else if (j + 1 < m) {
        dp[i][j] = dp[i][j + 1];
      } else if (i + 1 < n){
        dp[i][j] = dp[i + 1][j];
      }
    }
  }
  return dp[0][0];
};
// @lc code=end