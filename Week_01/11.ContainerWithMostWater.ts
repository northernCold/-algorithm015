/**
 * 暴力搜索
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
function maxArea(height: number[]): number {
  let area = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (i === j) continue
      let t: number = Math.abs(j - i) * Math.min(height[j], height[i]);
      if (t > area) {
        area = t;
      }

    }
  }
  return area;
}

/**
 * 双指针(指针的移动规则：
 * 1.开始从两端开始 
 * 2.先前/后移动较小的一段(最核心的原理：因为“水桶效应”，得出面积是由较小的一端决定，较大一端无论多大都不会影响面积) 
 * 3.比较更新面积)
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function maxArea(height: number[]): number {
  let area: number = 0;
  
  for (let i = 0, j = height.length - 1; i < j;) {
    area = Math.max(Math.min(height[i], height[j]) * (j - i), area);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++
    }
  }

  return area
}