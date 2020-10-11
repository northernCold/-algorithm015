/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020/10/10
 * @description
 * 1. 子问题 maxSub(n) = max(maxSub(i)) (i =[0, n))
 * 2. 定义状态 dp[i] 连续子数组[k, i](0 <= k < i)最大和
 * 3. 状态方程 dp[i] = max(dp[i - 1] + dp[i], dp[i])
 */
var maxSubArray = function(nums) {
  let dp = [];
  dp[0] = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    dp[i] > maxSum &&  (maxSum = dp[i])
  }
  return maxSum;
};
// @lc code=end

