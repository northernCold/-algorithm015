/**
 * @description 
 * 1.把长度为n的输入序列分为两个长度为n/2的子序列
 * 2.对这两个子序列分别采用归并排序
 * 3.将两个排序好的子序列合并成一个最终的排序序列
 */

// function mergeSort (arr) {
//   return _mergeSort(arr, 0, arr.length);
// }

// function _mergeSort (arr, left, right) {
//   if (left > right) return;
//   let mid = (left + right) >> 1;
//   mergeSort(arr, left, mid);
//   mergeSort(arr, mid + 1, right);
//   merge(arr, left, mid, right);
// }

// function merge (arr, left, mid, right) {
//   let temp = [];
//   let i = left, j = mid + 1, k = 0;
//   while (i <= mid && j <= right) {
//     temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
//   }
//   while (i <= mid) temp[k++] = arr[i++];
//   while (j <= right) temp[k++] = arr[j++];

//   for (let p = 0; p < temp.length; p++) {
//     arr[left + p] = temp[p];
//   }
// }

function mergeSort (arr) {
  return _mergeSort(arr, left, right);
}

function _mergeSort (arr, left, right) {
  if (left > right) return;
  let mid = (left + right) >> 1;
  _mergeSort(arr, left, mid);
  _mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge (arr, left, mid, right) {
  let temp = [];
  let i = left, j = mid + 1, k = 0;
  while (i <= mid && j <= right) {
    temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= right) {
    temp[k++] = arr[j++];
  }
  for (let p = 0; p < right; p++) {
    arr[left + p] = temp[p];
  }
}