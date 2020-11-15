/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
function toLowerCase(str) {
  let step = 'a'.codePointAt(0) - 'A'.codePointAt(0);
  let upperRangeStart = 'A'.codePointAt(0);
  let upperRangeEnd = 'Z'.codePointAt(0);
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].codePointAt(0) >= upperRangeStart && str[i].codePointAt(0) <= upperRangeEnd) {
      result[i] = String.fromCodePoint(str[i].codePointAt(0) + step);
    } else {
      result[i] = str[i];
    }
  }
  return result.join("");
};
// @lc code=end

