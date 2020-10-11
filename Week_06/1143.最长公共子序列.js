/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = [];
  for(let i = 0; i < text2.length; i++) {
      dp[i] = []
      dp[i][0] = text1[0] === text2[i] 
          ? 1
          : i === 0 ? 0 : dp[i - 1][0];
      
  }
  for(let i = 0; i < text1.length; i++) {
      dp[0][i] = text1[i] === text2[0] 
          ? 1 
          : i === 0 ? 0 : dp[0][i - 1];
      
  }
  for (let i = 1; i < text2.length; i++) {
      for (let j = 1; j < text1.length; j++) {
          if (text1[j] === text2[i]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
          }
      }
  }
  console.log(dp)
  return dp[text2.length - 1][text1.length - 1];
};
// @lc code=end

