/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @date 2020/10/19
 * @description 并查集
 */
class UnionFind {
  constructor(n) {
    let parent = [];
    for (let i = 0; i < n; i++) {
      parent[i] = i; 
    }
    this.count = n;
    this.parent = parent;
  }

  find(x) {
    let { parent } = this;
    while ( parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x];
    }
    return x;
  }

  union(p, q) {
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

function findCircleNum(M) {
  let friendCycle = new UnionFind(M.length);
  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M.length; j++) {
      if (M[i][j] === 1) {
        friendCycle.union(i, j);
      }
    }
  }
  return friendCycle.getCount();
};
// @lc code=end

// [
// [1,0,0,1]
// [0,1,1,0]
// [0,1,1,1]
// [1,0,1,1]]