/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let queue = [beginWord];
  let dic = new Set(wordList);
  let step = 1;
  while (queue.length) {
    let next = [];
    for (let w of queue) {
      let t;
      if (w === endWord) {
        return step;
      }
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < 26; j++) {
          t = w.slice(0, i) + String.fromCodePoint('a'.codePointAt(0) + j) + w.slice(i + 1);
          if (dic.has(t)) {
            next.push(t);
            dic.delete(t);
          }
        }
      }
    }
    queue = next;
    step++;
  }

  return 0;
};
// @lc code=end

