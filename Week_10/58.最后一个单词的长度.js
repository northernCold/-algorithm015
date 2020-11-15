/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.trim() === "") return 0;
  s = s.trim();
  let words = s.split(/\s+/);
  console.log(words)
  return words[words.length - 1].length;
};
// @lc code=end