/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start

function uniqueOccurrences(arr) {
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.has(arr[i]) ? (map.get(arr[i]) + 1) : 1)
  }
  for (let v of map.values()) {
    set.add(v);
  }
  return map.size === set.size;
};
// @lc code=end

