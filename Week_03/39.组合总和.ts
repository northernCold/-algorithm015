/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @date 0910
 * @description 回溯
 * @time O(logn)
 * @space O(?)
 */
function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  let path: number[] = [];
  const dfs = (candidates: number[], target: number, idx: number, sum: number, path: number[], result: number[][]) => {
    if (sum === target) {
      sum = 0;
      result.push([...path]);
      path = [];
      return;
    }
    if (idx >= candidates.length || sum > target) {
      path = [];
      return;
    };
    for (let i = idx; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(candidates, target, i, sum + candidates[i], path, result);
      path.pop();
    }
  }
  dfs(candidates, target, 0, 0, path, result);

  return result;
};

// @lc code=end

