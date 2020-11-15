/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1, word2) {
  let dp = [[0]];

  for (let i = 1; i <= word1.length; i++) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]),  dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};
// @lc code=end

