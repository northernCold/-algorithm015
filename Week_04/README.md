学习笔记

### 深度优先搜索(dfs)、广度优先搜索(bfs)

每次
dfs 代码模板
```javascript
// 递归
let visited = new Set();
function dfs(node, visited) {
  visited.add(node);
  
  // process current node
  // ...
  
  for (let child of node.children) {
    if (!visited.has(node)) {
      dfs(child, visited)
    }
  }

}

// 迭代
function dfs(tree) {
  if (tree.root === null) return [];
  let visited = [], stack = [tree.root];
  while (stack.length) {
    let node = stack.pop();
    visited.push(node);

    process(node);

    let nodes = generate_related_nodes(node);
    stack.push(nodes);
    // other precessing work
    // ...
  }
}

```
bfs 代码模板
```javascript
// 迭代
function bfs(graph, start, end) {
  let queue = [], visited = [];
  queue.push([start]);
  visited.push(start);

  while (queue.length) {
    node = queue.pop();
    visited.add(node);

    process(node);
    let nodes = generate_relates_nodes(node);
    queue.push(nodes);

    // other processing work
    // ...
  }
}
```

### 贪心算法

贪心算法：是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法

贪心：当下做局部最优选择，不能回退
动态规划：保存以前的运算结果，根据以前的结果对当前进行选择，可以回退
回溯：可以回退

### 二分查找

前提条件
1. 目标函数单调xing（单调递增或者递减）
2. 存在上下界
3. 能够通过索引访问

代码模板
```javascript
let left = 0, right = array.length - 1;
while (left <= right) {
  let mid = parseInt(left + right) / 2;
  if (array[mid] == target) {
    // find the target
    return result;
  } else if (array[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
```

### 按照升序排序的数组在预先未知的某个点上进行了旋转 中找到旋转点(找到第一个无须的地方)

关键点:
1. 原来的数组是升序排序的, 经过旋转，代表则用二分查找时，***一边是升序的，另一边无须的(右边一定小于左边的)。如果两边都是升序的，则表示该数组没有无序的地方***。
2. 根据二分处理后的两个部分，先根据 “右边大于左边” 确定无序的部分，则剩下另一个就是有序的部分
4. 重复在无序的部分进行重复进行上一个步骤，
5. 最后二分到长度为2的时候，就找到无序的位置了

```javascript
/**
 * @date 0920
 * @time O(logn)
 * @space O(1)
 * @return -1表示没有无序的地方 其他值为第一个无序地方的下标
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
```

### todolist 

[ ] 37.解数独
[ ] 433.最小基因变化
...