/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
// @date [08/28]
/**
 * 可以看做简单版的大整数相加
 * time O(n)
 * space O(1)
 */
function plusOne(digits: number[]): number[] {
  digits[digits.length -1 ] += 1;
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    carry = Math.floor(digits[i]/10)
    if (carry ===  0) {
      break;
    } else {
      digits[i] %= digits[i];
      if (i === 0){
        digits.unshift(1);
      } else {
        digits[i - 1]++;
      }
    }
  }
  return digits;
};
// @lc code=end

