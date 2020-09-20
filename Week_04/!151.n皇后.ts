/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * 
 */
function solveNQueens(n: number): string[][] {
  let result: string[][] = [];
  let main: number[] = [];
  let cross: number[] = [];
  let col = new Map<number, number>();

  const generate = (hash: Map<number, number>) => {
    let result: string[] = [];
    for (let i = 0; i < n; i++) {
      let q = hash.get(i);
      let t = "";
      for (let j = 0; j < n; j++) {
        t += q == j ? "Q" : ".";
      }0
      result.push(t); 
    }
    return result;
  }

  const dfs = (row: number) => {
    if (row === n) {
      result.push(generate(col));
    };
    for (let i = 0; i < n; i++) {
      if (main[row - i - 1 + n] || cross[row + i] || col.has(i)) continue;
      main[row - i - 1 + n] = 1;
      cross[row + i] = 1;
      col.set(i, row) ;
      dfs(row + 1);
      main[row - i - 1 + n] = 0;
      cross[row + i] = 0;
      col.delete(i);
    }
  }
  dfs(0);
  return result;
};

// 0,0 0,1 0,2 0,3
// 1,0 1,1 1,2 1,3
// 2,0 2,1 2,2 2,3
// 3,0 3,1 3,2 3,3
// @lc code=end

