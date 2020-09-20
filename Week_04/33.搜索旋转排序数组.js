/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @date 0920
 * @description 快排 + 二分查找
 * @space O(nlogn)
 * @time O(n)
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  let sorted = [];
  for (let i = 0; i < nums.length; i++) {
    sorted.push({
      val: nums[i],
      index: i
    })
  }
  sorted.sort((a, b) => a.val - b.val);
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (sorted[mid].val === target) {
      return sorted[mid].index;
    }
    if (sorted[mid].val > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// search([4,5,6,7,0,1,2],0);
// search([],0);
// @lc code=end

