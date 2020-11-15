/**
 * @description 选择排序 每次找最小值，然后放待排序数组后。
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i ; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      let t = arr[minIdx]; arr[minIdx] = arr[i]; arr[i] = t;
    }
  }
}