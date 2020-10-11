/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
var minimumTotal = function(triangle) {
  let memo = [];
  let step = triangle.length;
  let reverse = (x = 0, y = 0) => {
      if (x >= triangle.length || y >= triangle[x].length) return 0;
      if (!memo[x * step + y]) {
          memo[x * step + y] = Math.min(reverse(x + 1, y), reverse(x + 1, y + 1)) + triangle[x][y];
      }
      return memo[x * step + y];
  }
  return reverse();
};

/**
 * @param {number[][]} triangle
 * @description 
 * 1. 定义状态 dp[i][j] 在i,j下，最小和
 * 2. 状态方程 dp[i][j] = dp[i][j] + min(dp[i + 1][j], dp[i + 1][j])
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let dp = triangle;
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i + 1].length; j++) {
      dp[i][j] += Math.min(dp[i + 1][j + 1], dp[i + 1][j]);
    }
  }
  return dp[0][0]
};
// @lc code=end

