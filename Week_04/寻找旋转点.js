// 按照升序排序的数组在预先未知的某个点上进行了旋转 中找到旋转点(找到第一个无须的地方)

// 关键点:
// 原来的数组是升序排序的
// 代表则用二分查找时，一边是升序的，另一边无须的(右边一定小于左边的)
// 如果两边都是升序的，则该数组没有无序的地方
// 根据二分处理的两个部分，先根据 右边大于左边 确定无序的部分，则剩下另一个是有序的部分
// 重复在无序的部分进行二分，
// 最后二分到长度为2的时候，就找到无序的位置了

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

/**
 * @date 0920
 * @time O(logn)
 * @space O(1)
 */
function findFirstUnSortedPoint (nums) {
  if (nums.length === 0 || nums.length === 1) return -1;
  let left = 0;
  let right = nums.length - 1;
  let mid = -1;
  while (left < right) {
    mid = parseInt((left + right) / 2);
    if (nums[left] < nums[mid] && nums[mid] < nums[right]) {
      return -1;
    } else if (nums[left] > nums[mid]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid;
    }
    if (right - left === 1) return left;
  }
}

console.log(
  findFirstUnSortedPoint([4,5,6,7,0,1,2]), // 3
  findFirstUnSortedPoint([4,5,6,7,8,0,1,2]), // 4
  findFirstUnSortedPoint([4,5,6,7,8,9,0,1,2]), // 5
  findFirstUnSortedPoint([4,5,6,7,8,9,10, 0,1,2]), // 6
  findFirstUnSortedPoint([0,1,2,4,5,6,7]), // -1
  findFirstUnSortedPoint([1]), // -1
  findFirstUnSortedPoint([1, 2]), // 0
  findFirstUnSortedPoint([2, 1]), // 0
)
