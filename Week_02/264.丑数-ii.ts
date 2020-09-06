/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
function nthUglyNumber(n: number): number {
  let table = new Set([1]);
  let result: number = 1;
  let heap = new BinaryHeap([1]);
  let t = 1;

  for (let i = 0; i < n; i++) {
    t = heap.pop();

    result = t;
    for (let v of [2, 3, 5]) {
      if (!table.has(t * v)) {
        table.add(t * v)
        heap.insert(t * v);
      }
    }
  }

  return result;
};

class BinaryHeap {
  heap: number[];
  size: number;
  constructor (arr?: number[]) {
    this.heap = arr || [];
    this.size = arr ? arr.length : 0;
  }

  pop () {
    let minElement: number = this.heap[0];
    this.size--;
    this.heap[0] = this.heap[this.size];
    this.heap.pop();
    this.heapifyDown(0);
    return minElement;
  }

  insert (value: number) {
    this.heap[this.size] = value;
    this.size++;

    this.heapifyUp(this.size - 1);
  }

  heapifyUp (i: number) {
    let t = this.heap[i];
    
    while (i > 0 && t < this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)];
      i = this.parent(i);
    }
    this.heap[i] = t;
  }

  heapifyDown (i: number) {
    let child;
    let t = this.heap[i];

    while (this.kthChild(i, 1) < this.size) {
      child = this.minChild(i);
      if (t < this.heap[child]) break;
      this.heap[i] = this.heap[child];
      i = child;
    }

    this.heap[i] = t;
  }

  minChild (i: number) {
    let left: number = this.kthChild(i, 1);
    let right: number = this.kthChild(i, 2);
    if (right > this.size - 1) return left;
    return this.heap[left] < this.heap[right] ? left : right;
  }
  isEmpty() {
    return !!this.size;
  }

  parent (i: number) {
    return Math.floor((i - 1) / 2);
  }

  kthChild(i: number, k: number) {
    return i * 2 + k;
  }
}
// @lc code=end

