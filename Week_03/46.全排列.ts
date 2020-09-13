/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @date 0911
 * @description 分治+回溯
 * @space O(nxn!)
 * @time O(nxn1)
 */
function permute(nums: number[]): number[][] {
  let path: number[] = [];
  let result: number[][] = [];
  let hash = new Set<number>();
  const dfs = () => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (hash.has(i)) continue;
      hash.add(i);
      path.push(nums[i]);
      dfs();
      hash.delete(i)
      path.pop();
    }
  }
  dfs()
  return result;
};
// @lc code=end

