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
// function isAnagram(s: string, t: string): boolean {
//   let hash = new Map();
//   for (let i = 0; i < s.length; i++) {
//     let c = s[i];
//     hash.set(c, (hash.has(c) ? hash.get(c) : 0) + 1)
//   }
//   for (let i = 0; i < t.length; i++) {
//     let c = t[i];
//     if (hash.has(c)) {
//       let t = hash.get(c);
//       t > 1 ?  hash.set(c, --t) : hash.delete(c);
//     } else {
//       return false;
//     }
//   }
//   return hash.size === 0;
// };

/**
 * @date 0908
 * @description 哈希表
 * @time O(n)
 * @space O(n)
 */
// function isAnagram(s: string, t: string): boolean {
//   let hash = new Map<string, number>();
//   for (let i = 0; i < s.length; i++) {
//     hash.set(s[i], hash.has(s[i]) ? hash.get(s[i]) as number + 1 : 1);
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (!hash.has(t[i])) return false;
//     let cnt: number = hash.get(t[i]) as number;
//     if (cnt > 1) {
//       hash.set(t[i], --cnt);
//     } else {
//       hash.delete(t[i]);
//     }
//   }
//   return hash.size === 0;
// }

// 改进写法
interface HashTable {
  [propName: string]: number;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false; // 优化
  let hash: HashTable = {} as HashTable;
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return false;
    hash[t[i]]--;
  }
  return true;
}

// @lc code=end

