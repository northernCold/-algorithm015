/*
 * @lc app=leetcode.cn id=242 lang=typescript
 * 
 * [242] 有效的字母异位词
 * date: [08/31]
 */

// @lc code=start
/**
 * 排序
 */
// function isAnagram(s: string, t: string): boolean {
//   const sortString = (str: string) => 
//     str
//       .split("")
//       .sort((a: string, b: string): number => {
//         if (typeof a === "string") {
//           return (a.codePointAt(0) as number) - (b.codePointAt(0) as number);
//         } else {
//           return 0;
//         }
//       })
//       .join("");
//   return sortString(s) === sortString(t)
// };

/**
 * 哈希表
 */
function isAnagram(s: string, t: string): boolean {
  let hash = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    hash.set(c, (hash.has(c) ? hash.get(c) : 0) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (hash.has(c)) {
      let t = hash.get(c);
      t > 1 ?  hash.set(c, --t) : hash.delete(c);
    } else {
      return false;
    }
  }
  return hash.size === 0;
};

// @lc code=end

