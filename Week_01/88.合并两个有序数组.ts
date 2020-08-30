/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
/**
 * time: O(nlogn)
 * space: O(1)
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i: number = 0; i < n; i++) {
    nums1[m + i] = nums2[i];    
  }
  nums1.sort((a, b) => a - b)
};
// @lc code=end

