/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @date 2020/10/25
 */
function hammingWeight(n) {
  let cnt = 0;
  // while (n !== 0) {
  //   if ((n & 1) === 1) {
  //     cnt++;
  //   }
  //   n = n >> 1;
  // }
  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) {
      cnt++;
    }
    n = n >> 1;
  }
  return cnt;
};

// @lc code=end

