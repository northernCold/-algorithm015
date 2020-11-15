/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
/**
 * @date 2020/10/20
 * @description 并查集 关键点：将边界的“O”链接的一个虚拟节点
 */
class UnionFind {
  constructor (n) {
    this.parent = [];

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find (x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  union (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }
}
function solve(board) {
  if (board.length === 0) return board;
  let row = board.length;
  let col = board[0].length;
  let border = row * col;
  let uf = new UnionFind(row * col + 1);

  let directions = [[0, 1], [1, 0], [-1, 0], [0 , -1]];
  const getIndex = (i, j) => i * col + j;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] !== "O") continue;
      if (i === 0 || i === row - 1 || j === 0 || j === col - 1) {
        uf.union(border, getIndex(i, j));
        continue;
      }
      let ni, nj;
      for (let k = 0; k < directions.length; k++) {
        ni = i + directions[k][0];
        nj = j + directions[k][1];
        if (ni >= 0 && ni < row && nj >= 0 && nj < col && board[ni][nj] === "O") {
          uf.union(getIndex(i, j), getIndex(ni, nj));
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!uf.isConnected(border, getIndex(i, j))) {
        board[i][j] = "X";
      }
    }
  }
  return board;
};
// @lc code=end