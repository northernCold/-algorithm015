/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let max = 0;
  let area;
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (max < intervals[i][1]) {
      max = intervals[i][1];
    }
  }
  area = new Array(max + 1).fill(0);
  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    for (let i = start; i <= end; i++) {
      area[i] = 1;
    }
  }
  let status = false;
  let left = 0, right = 0;
  for (let i = 0; i < area.length;) {
    if (area[i] === 1) {
      if (status === false) {
        status = true
        left = i;        
      } else {
        i++;
        if (i >= area.length) {
          result.push([left, i - 1]);
        }
      }
    } else {
      if (status === true) {
        status = false;
        right = i - 1;
        result.push([left, right]);
      } else {
        i++;
      }
    }
  }
  return result;
};
// @lc code=end