




























/**
 * date: [2020/8/24]
 * 双指针
 * 当两指针不等的时候，前面的指针才会向后移并赋值为后面指针的值
 * time: O(n)
 * space: O(1)
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return 1;
  let c: number = 0;
  for (let i: number = 0, j: number = 1; j < nums.length;) {
    if (nums[i] === nums[j]) {
      c++;
      j++;
    } else {
      nums[++i] = nums[j++];
    }
  }
  return nums.length - c;
};
