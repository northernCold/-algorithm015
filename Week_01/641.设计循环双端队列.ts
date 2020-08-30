/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * 利用双向链表实现双端队列
 * head <=> node ... <=> tail
 * 新增删除头尾 O(1)
 * 查看头尾 O(1)
 */
class DequeNode {
  val: number | null;
  next: DequeNode | null;
  prev: DequeNode | null;

  constructor(val?: number) {
    this.val = val || null;
    this.next = null;
    this.prev = null;
  }
}

class MyCircularDeque {
  capacity: number
  size: number
  head: DequeNode | null
  tail: DequeNode | null

  constructor(k: number) {
    this.capacity = k || 0;
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) {
      let newNode: DequeNode | null;
      newNode = new DequeNode(value);
      this.head = new DequeNode();
      this.tail = new DequeNode();

      this.head.next = newNode;
      newNode.next = this.tail;
      newNode.prev = this.head;
      this.tail.prev = newNode;
    } else {
      let next: DequeNode | null;
      let newNode: DequeNode | null;
      next = (this.head as DequeNode).next ;
      newNode = new DequeNode(value);

      (this.head as DequeNode).next = newNode;
      newNode.prev = this.head;
      newNode.next = next;
      (next as DequeNode).prev = newNode;
    }
    this.size++;
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) {
      let newNode: DequeNode | null;
      newNode = new DequeNode(value);
      this.head = new DequeNode();
      this.tail = new DequeNode();

      this.head.next = newNode;
      newNode.next = this.tail;
      newNode.prev = this.head;
      this.tail.prev = newNode;
    } else {
      let prev: DequeNode | null;
      let newNode: DequeNode | null;
      prev = (this.tail as DequeNode).prev;
      newNode = new DequeNode(value);

      (this.tail as DequeNode).prev = newNode;
      newNode.next = this.tail;
      newNode.prev = prev;
      (prev as DequeNode).next = newNode;
    }
    this.size++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    let next: DequeNode | null;
    next = ((this.head as DequeNode).next as DequeNode).next;

    (this.head as DequeNode).next = next;
    (next as DequeNode).prev = this.head;
    this.size--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    let prev: DequeNode | null;
    prev = ((this.tail as DequeNode).prev as DequeNode).prev;

    (prev as DequeNode).next = this.tail;
    (this.tail as DequeNode).prev = prev;
    this.size--;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) return -1;
    return ((this.head as DequeNode).next as DequeNode).val as number;
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    return ((this.tail as DequeNode).prev as DequeNode).val as number;
  }

  isEmpty(): boolean {
    return this.head === null || this.head.next === null || this.tail === null || this.tail.prev === null || this.head.next === this.tail;
  }

  isFull(): boolean {
    let len = 0;
    let t: DequeNode | null;
    if (this.isEmpty()) return false;
    return this.size >= this.capacity;
  }
}

let circularDeque = new MyCircularDeque(3); // 设置容量大小为3
circularDeque.insertLast(1);			        // 返回 true
circularDeque.insertLast(2);			        // 返回 true
circularDeque.insertFront(3);			        // 返回 true
circularDeque.insertFront(4);			        // 已经满了，返回 false
circularDeque.getRear();  				// 返回 2
circularDeque.isFull();				        // 返回 true
circularDeque.deleteLast();			        // 返回 true
circularDeque.insertFront(4);			        // 返回 true
circularDeque.getFront();				// 返回 4

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

