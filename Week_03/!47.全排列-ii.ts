/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @date 0913
 * @description 分治+回溯+剪枝 重点在如何剪枝
 * @space O(nxn!)
 * @time O(nxn1)
 */
function permuteUnique(nums: number[]): number[][] {
  let path: number[] = [];
  let result: number[][] = [];
  let hash = new Set<number>();

  nums.sort(); // 剪枝的前提，排序
  const dfs = (idx: number) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    if (idx > 0 && nums[idx] === nums[idx - 1] && !hash.has(idx - 1)) return;

    for (let i = 0; i < nums.length; i++) {
      if (hash.has(i)) continue;
      hash.add(i);
      path.push(nums[i]);
      dfs(i);
      hash.delete(i)
      path.pop();
    }
  }
  dfs(0)
  return result;
};
// @lc code=end

