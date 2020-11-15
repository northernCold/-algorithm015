/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1, nums2) {
  let hash = new Set();
  let result = new Set();
  for (let i = 0; i < nums1.length; i++) {
    hash.add(nums1[i])
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hash.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return [...result];
};
// @lc code=end

