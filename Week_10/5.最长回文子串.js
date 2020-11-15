/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @description 
 * dp[i][j]：s[i...j]
 * dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
 * (j - 1) - (i + 1) + 1 < 2;
 * j - i < 3
 * j - i + 1 < 4
 * 注意填表顺序
 */
var longestPalindrome = function(s) {
  let dp = [];
  let max = 0;
  let maxi = 0, maxj = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(0);
    dp[i][i] = true;
  }
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] === s[j]) {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      } else {
        dp[i][j] = false
      }

      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1;
        maxi = i;
        maxj = j;
      }
    }
  }
  return s.slice(maxi, maxj + 1);
};
// @lc code=end

//   b a b a d
// b 1
// a   1
// b     1
// a
// d
