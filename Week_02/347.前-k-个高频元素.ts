/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
interface Frequent {
  key: number,
  value: number
}
/**
 * @date 0906
 * @description 哈希表记录频率后，排序截取前k位
 * @time O(nlogn)
 * @space O(n)
 */
function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 0) return [];
  let hash = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], hash.has(nums[i]) ? hash.get(nums[i]) as number + 1 : 1);
  }

  let freqList: Array<Frequent> = [];
  for (let [key, value] of hash.entries()) {
    freqList.push({
      key,
      value
    })
  }
  freqList.sort((a: Frequent, b: Frequent) => b.value - a.value)

  return freqList.slice(0, k).map(v => v.key);
};
// @lc code=end
