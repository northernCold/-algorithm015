/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * 1. 子问题 sum(i) = sum(i - k);
 * 2. 定义状态 dp[i] 在i处，最少个数
 * 3. 状态方程 dp[i] = min(dp[i - k]);
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = [0];
  for (let i = 1; i <= amount; i++)  {
      dp[i] = Infinity;
      for (let j = 0; j < coins.length; j++) {
          if (i >= coins[j] && i - coins[j] >= 0) {
              dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
          }
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

