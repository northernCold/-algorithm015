/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @date 0920
 * @description dfs 
 * 1.下一次查找时，如何清除之前找到岛屿 将之前找到的岛屿置为“0”
 * 2.如何跳过之前已经查找的位置 嵌套for循环 起点是找到的第一个”1“
 * @space O(nm) ???
 * @space O(nm)
 */
var numIslands = function(grid) {
  if (grid.length === 0) return 0;
  let row = grid.length;
  let col = grid[0].length;
  let cnt = 0;
  const dfs = (x, y) => {
    if (x >= row || y >= col || x < 0 || y < 0 || grid[x][y] !== '1') return false;
    grid[x][y] = '0';   
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
    dfs(x, y - 1);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        dfs(i,j);
        cnt++;
      }
    }
  }
  return cnt;
};

// @lc code=end

