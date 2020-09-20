/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * 哈希表
 * time: O(nklognk)
 * space: O(nk)
 */
// function groupAnagrams(strs: string[]): string[][] {
//   let hash = new Map<string, string[]>();;
//   for (let str of strs) {
//     let t = str.split("").sort().join("");
//     if (hash.has(t)) {
//       let tArr = hash.get(t) as string[];
//       tArr.push(str)
//       hash.set(t, tArr as string[]);
//     } else {
//       hash.set(t, [str])
//     }
//   }

//   let ret: string[][] = [...hash.values()];

//   return ret;
// };

/**
 * @data 0915
 * @description 排序 + 哈希表
 * @time O(nklogk) k为字符串长度 排序logk 遍历数组n
 * @space O(nk)
 */
function groupAnagrams(strs: string[]): string[][] {
  let hash = new Map<string, string[]>();

  for (let str of strs) {
    let s = str.split("").sort().join("");
    if (hash.has(s)) {
      let a = hash.get(s) as string[];
      hash.set(s, [...a, str]);
    } else {
      hash.set(s, [str]) 
    }
  }
  return [...hash.values()];
}
// @lc code=end

