/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @description
 * 1.子问题 从第i阶到楼顶有几种方法
 * 2.定义状态 dp[i] 从第i阶到楼顶有几种方法
 * 3.状态方程 dp[i] = dp[i - 1] + dp[i - 2];
 */
function climbStairs(n: number): number {
  let dp: number[] = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

