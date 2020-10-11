/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let result = [];
  result[0] = 0;
  result[1] = 1;
  for (let i = 2; i <= N; i++) {
      result[i] = result[i - 1] + result[i - 2];
  }

  return result[N]
};
// @lc code=end

