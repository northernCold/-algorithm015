/**
 * @description 从前到后构建有序序列。在未排序数据，在有序序列中，找到相应的位置插入。
 */
function insertSort (arr) {
  let preIndex, current;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

let arr = [5,1,7,3,55,10];
insertSort(arr);
console.log(arr);