// 两数之和
/**
 * 暴力搜索
 * 时间复杂度 O(n²)
 * 空间复制度 O(1) 
 */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
  return [-1, -1]
};

/**
 * 使用哈希映射，用空间来换取时间 
 * 时间复制度 O(n)
 * 空间复制度 O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (hash.has(x)) {
      return [hash.get(x), i]
    }
    hash.set(nums[i], i);
  }
  return [-1, -1]
};

/**
 * @Date: 0901
 * @Description： 哈希表
 * @time: O(n)
 * @Space: O(1)
 */

function twoSum(nums: number[], target: number): number[] {
  let hash = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    hash.set(target - nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      let j = hash.get(nums[i]);
      if (i === j) continue;
      return [i, hash.get(nums[i])]
    }
  }

  return [];
};