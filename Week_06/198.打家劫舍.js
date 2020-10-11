/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 1. 子问题 max(n) = max(n - 1) + 1
 * 2. dp[i] = max(dp[i - 1], dp[i - 2] + dp[i])
 */
var rob = function(nums) {
  if (nums.length <= 2) {
      return nums.reduce((t, c) => t = t < c ? c : t, 0);
  }
  nums[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
      nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
  }
  return nums[nums.length - 1];
};
// @lc code=end

