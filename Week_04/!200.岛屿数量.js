/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @date 2020/10/17
 * @description 并查集
 */
class UnionFind {
  constructor (row, col, arr) {
    this.count = 0;
    this.parent = [];
    const getIndex = (i, j) => i * col + j;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (arr[i][j] === "1") {
          this.parent[getIndex(i, j)] = getIndex(i, j);
          this.count++;
        }
      }
    }
  }

  find (x) {
    let { parent } = this;
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }

  union (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }

  getCount() {
    return this.count;
  }
}
var numIslands = function (grid) {
  const directions = [[0, 1], [1, 0]]
  let row = grid.length;
  let col = grid[0].length;
  let islands = new UnionFind(row, col, grid);
  const getIndex = (i, j) => i * col + j;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let ni, nj;
      if (grid[i][j] === "0") continue
      for (let d = 0; d < directions.length; d++) {
        ni = i + directions[d][0];
        nj = j + directions[d][1];
        if (nj < col && ni < row && grid[ni][nj] === "1") {
          islands.union(getIndex(i, j), getIndex(ni, nj));
        }
      }
    }
  }
  
  return islands.getCount();
}
// /**
//  * @date 0920
//  * @description dfs 
//  * 1.下一次查找时，如何清除之前找到岛屿 将之前找到的岛屿置为“0”
//  * 2.如何跳过之前已经查找的位置 嵌套for循环 起点是找到的第一个”1“
//  * @space O(nm) ???
//  * @space O(nm)
//  */
// var numIslands = function(grid) {
//   if (grid.length === 0) return 0;
//   let row = grid.length;
//   let col = grid[0].length;
//   let cnt = 0;
//   const dfs = (x, y) => {
//     if (x >= row || y >= col || x < 0 || y < 0 || grid[x][y] !== '1') return false;
//     grid[x][y] = '0';   
//     dfs(x + 1, y);
//     dfs(x, y + 1);
//     dfs(x - 1, y);
//     dfs(x, y - 1);
//   }

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (grid[i][j] === '1') {
//         dfs(i,j);
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// };

// @lc code=end

