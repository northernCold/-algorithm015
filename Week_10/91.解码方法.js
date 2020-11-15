/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] === "0") return 0;
  let dp = [1];

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== "0") {
      dp[i] = dp[i - 1]
    } else {
      dp[i] = 0;
    }

    let num = parseInt(s[i - 1]) * 10 + parseInt(s[i]);
    if (10 <= num && num <= 26) {
      if (i === 1) {
        dp[i]++;
      } else {
        dp[i] += dp[i - 2];
      }
    }
  }

  return dp[s.length - 1];
};
// @lc code=end

numDecodings("10")
