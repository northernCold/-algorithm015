class BinaryHeap {
  heap: number[];
  size: number;

  constructor () {
    this.heap = [];
    this.size = 0;
  }

  /**
   * Insert new element in to heap
   */
  insert (val) {
    this.heap[this.size] = val;
    this.size++;
    this.heapifyUp(this.size - 1);
    return true;
  }
  
  delete (idx) {
    if (this.isEmpty()) throw new Error("Heap is empty, No element to delete")
    let maxElement = this.heap[idx];
    this.heap[idx] = this.heap[this.size - 1];
    this.size--;
    this.heapifyDown(idx);
    return maxElement;
  }

  printHeap () {
    console.log("Heap = ", this.heap.join(" "));
  }

  findMax() {
    if (this.isEmpty()) throw new Error("this heap is Empty")
    return this.heap[0];
  }
  
  heapifyUp (idx) {
    let insertVal = this.heap[idx];
    while (insertVal > this.heap[this.parent(idx)]) {
      this.heap[idx] = this.heap[this.parent(idx)]
      idx = this.parent(idx);
    }
    this.heap[idx] = insertVal;
  }

  heapifyDown (idx: number) {
    let child;
    let temp: number = this.heap[idx];
    while (this.kthChild(idx, 1) < this.size) {
      child = this.maxChild(i);
      if (temp >= this.heap[child]) {
        break;
      };
      this.heap[idx] = this.heap[child];
      idx = child;
    }
    this.heap[idx] = temp;
  }

  parent(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  kthChild(idx: number, k: number) {
    return 2 * idx + k;
  }

  maxChild (idx: number) {
    let left = this.kthChild(idx, 1);
    let right = this.kthChild(idx, 2);
    if (right > this.size - 1) return left;
    return this.heap[left] > this.heap[right] ? left : right;
  }

  isEmpty () {
    return !!this.size;
  }
}