/**
 * @description 嵌套循环，每次查看相邻的元素如果逆序，则交换
 */
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
        var temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr = [5,1,7,3,55,10];
bubbleSort(arr);
console.log(arr);