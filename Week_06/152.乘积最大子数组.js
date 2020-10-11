/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
var maxProduct = function(nums) {
  let max = nums[0], min = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < 0) {
          max = Math.max(min * nums[i], nums[i]);
          min = Math.min(max * nums[i], nums[i]);
          continue;    
      }
      max = Math.max(max * nums[i], nums[i]);
      min = Math.min(min * nums[i], nums[i]); 
  }
  return max;
};
// @lc code=end

