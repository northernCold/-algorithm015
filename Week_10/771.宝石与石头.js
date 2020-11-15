/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let result = 0;
  let map = new Set(J.split(""));
  for (let ch of S) {
    map.has(ch) && result++;
  }

  return result;
};
// @lc code=end

