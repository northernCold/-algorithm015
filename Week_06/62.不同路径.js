/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description
 * 1. 子问题 map(i, j) 到达终点有多少条
 * 2. 定义状态： dp[i][j]到达终点有多少条
 * 3. 状态转移方程： dp[i][j] = dp[i][j+1] + dp[i+1][j]
 */
var uniquePaths = function(m, n) {
  let dp = Array.from({length: n})
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i][0] = 1;
  }
  for (let i = 0; i < m; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (j - 1 >= 0 && i - 1 >= 0) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      } else if (j - 1 >= 0) {
        dp[i][j] = dp[i][j - 1]
      } else if (i - 1 >= 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return dp[n - 1][m -1]
};
// @lc code=end