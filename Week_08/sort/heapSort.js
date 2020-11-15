// 基本思想
// 输入：一系列的无序元素（比如说，数字）组成的输入数组A

// 经过：堆排序的过程可以具体分为三步，创建堆，调整堆，堆排序。

// 创建堆，以数组的形式将堆中所有的数据重新排序，使其成为最大堆/最小堆。

// 调整堆，调整过程需要保证堆序性质：在一个二叉堆中任意父节点大于其子节点。

// 堆排序，取出位于堆顶的第一个数据（最大堆则为最大数，最小堆则为最小数），放入输出数组B 中，再将剩下的对作调整堆的迭代/重复运算直至输入数组 A中只剩下最后一个元素。

// 输出：输出数组B，里面包含的元素都是A 中的但是已经按照要求排好了顺序
// 二叉堆是一种特殊的堆，二叉堆是完全二元树（二叉树）或者是近似完全二元树（二叉树）。二叉堆有两种：最大堆和最小堆。最大堆：父结点的键值总是大于或等于任何一个子节点的键值；最小堆：父结点的键值总是小于或等于任何一个子节点的键值。
// Javascript
function heapSort(arr) {
  if (arr.length === 0) return;
  let len = arr.length;
  // 建堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  // 排序
  for (let i = len - 1; i >= 0; i--) {
    // 堆顶元素与最后一个互换
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 对 0 ～ i 的数组建堆
    heapify(arr, i, 0);
  }
}
function heapify(arr, len, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
}
