/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start

/**
 * @date 0907
 * @description 先递归生成所有可能的情况，然后再用栈过滤不合法的
 * @time O(2的2n次方)
 * @space O(n)
 */
// function generateParenthesis(n: number): string[] {
//   const generate = (str: string, result: string[]) => {
//     if (str.length >= 2 * n) {
//       result.push(str);
//       return
//     };
//     for (let s of ["(", ")"]) {
//       generate(str + s, result)
//     }
//   }
//   let result: string[] = [];
//   generate("", result)

//   let bracketMap: object = {"(": ")"}
//   const isValidBracket = (str: string) => {
//     let stack: string[] = [];
//     let chars: string[] = str.split("");
//     for (let i = 0; i < chars.length; i++) {
//       if (stack.length > 0 && bracketMap[stack[stack.length - 1]] === chars[i]) {
//         stack.pop();
//       } else {
//         stack.push(chars[i])
//       }
//     }
    
//     return stack.length === 0;
//   }
//   return result.filter(v => isValidBracket(v));
// };

/**
 * 解法二
 * @date 0908
 * @description 深度递归 利用合法括号的子串右括号大于等于左括号的特性
 * @time O(2的n平方)
 * @spce O(n)
 */
function generateParenthesis(n: number): string[] {
  let result: string[] = [];
  dfs("", 0, 0, n, result);
  return result;
}

function dfs(str: string, left: number, right: number, n: number, result: string[]) {
  if (left < right) return;
  if (str.length >= n * 2 && left === right) {
    result.push(str);
    return
  }
  if (left + right >= n * 2) return;

  dfs(str + ")", left, right + 1, n, result);
  dfs(str + "(", left + 1, right, n, result)
}
// @lc code=end

