/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = [];
  if (!s.trim()) return -1;
  for (let ch of s) {
    hash[ch] ? (hash[ch]++) : (hash[ch] = 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end

