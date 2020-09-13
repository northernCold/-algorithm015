/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * 解法一
 * @date 0908
 * @description 回溯 + 剪枝
 * @time O(logk)
 * @space O(k)
 */
function combine(n: number, k: number): number[][] {
  let result: number[][] = [];
  let path: number[] = [];

  dfs(n, 1, k, path, result);

  return result;
};

function dfs(n: number, start: number, k: number, path: number[], result: number[][]) {
  if (path.length >= k) {
    result.push([...path]);
    return;
  };
  if (n - start + 1< k - path.length) return;
  for (let i = start; i <= n; i++) {
    path.push(i);
    dfs(n, i + 1, k, path, result);
    path.pop();
  }
}

// @lc code=end

