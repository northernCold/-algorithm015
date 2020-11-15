/**
 * @description 数组取标杆pivot, 将小元素放pivot左边，大元素放右侧，然后依次对于右边和左边的子数组继续快排。
 */
let arr = [123, 2123, 5, 1, -213, 215, 9, 7];

function quickSort(arr) {
  return _quickSort(arr, 0, arr.length - 1); 
}

function _quickSort(arr, left, right) {
  if (left >= right) return;
  let pivot = partition(arr, left, right);
  _quickSort(arr, left, pivot - 1);
  _quickSort(arr, pivot + 1, right);
}

function partition(arr, left, right) {
  let counter = left, pivot = right;
  for (let i = left; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      let t = arr[i];
      arr[i] = arr[counter];
      arr[counter] = t;
      counter++;
    }
  }
  let t = arr[pivot];
  arr[pivot] = arr[counter];
  arr[counter] = t;
  return counter;
}
quickSort(arr);
console.log(arr);