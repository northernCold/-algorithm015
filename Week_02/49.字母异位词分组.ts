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
function groupAnagrams(strs: string[]): string[][] {
  let hash = new Map<string, string[]>();;
  for (let str of strs) {
    let t = str.split("").sort().join("");
    if (hash.has(t)) {
      let tArr = hash.get(t) as string[];
      tArr.push(str)
      hash.set(t, tArr as string[]);
    } else {
      hash.set(t, [str])
    }
  }

  let ret: string[][] = [...hash.values()];

  return ret;
};
// @lc code=end

