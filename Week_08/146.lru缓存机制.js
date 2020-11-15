/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
// class LRUCache {
//     constructor(capacity) {
//         this.cache = new Map()
//         this.capacity = capacity
//     }
//     get(k) {
//         if (!this.cache.has(k)) return -1
//         const v = this.cache.get(k)
//         // make sure it is latest
//         this.cache.delete(k)
//         this.cache.set(k, v)
//         return v
//     }
//     put(k, v) {
//        // delete if if it exists
//        if (this.cache.has(k)) this.cache.delete(k)

//        // store it in cache
//        this.cache.set(k, v)

//        // make sure not to exceed the range after store it in cache
//        if (this.cache.size > this.capacity) {
//            const first = this.cache.keys().next().value
//            this.cache.delete(first)
//        }
//     }
// }



// class Node {
//   constructor(key, val) {
//     this.key = key;
//     this.val = val;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoubleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;

//     this.length = 0;
//   }
//   push(key, value) {
//     const newNode = new Node(key, value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail
//       this.tail = newNode;
//     }
//     this.length++;
//     return newNode;
//   }

//   remove(node) {
//     if (!node.next && !node.prev) {
//       this.head = null;
//       this.tail = null;
//     } else if (!node.prev) {
//       this.head = node.next;
//       this.head.prev = null;
//     } else if (!node.prev) {
//       this.tail = node.prev;
//       this.tail.next = null;
//     } else {
//       const prev = node.prev;
//       const next = node.prev;
//       prev.next = next;
//       next.prev = prev;
//     }
//     this.length--;
//   }
// }

// class LRUCache {
//   constructor(capacity) {
//     this.cache = new Map();
//     this.map = {};
//     this.capacity = capacity;
//     this.dll = new DoubleLinkedList();
//   }
//   get(k) {
//     if (!this.map[k]) return -1;
//     const v = this.map[k].val;
//     this.dll.remove(this.map[k]);
//     this.map[k] = this.dll.push(k, v);
//     return v;
//   }
//   put(k, v) {
//     if (this.map[k]) {
//       this.dll.remove(this.map[k]);
//     }
//     this.map[k] = this.dll.push(k, v);
//     if (this.dll.length > this.capacity) {
//       const currK = this.dll.head.key;
//       delete this.map[currK];
//       this.dll.remove(this.dll.head);
//     }
//   }
// }

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(k) {
    if (!this.cache.has(k)) return -1;
    let v = this.cache.get(k);
    this.cache.delete(k);
    this.cache.set(k, v);
    return v;
  }
  put(k, v) {
    if (this.cache.has(k)) {
      this.cache.delete(k);
    }
    this.cache.set(k, v);
    if (this.cache.size > this.capacity) {
      let first = this.cache.keys().next().value;
      this.cache.delete(first);
    }
  }
}

// let cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(
//     cache.get(1)       // 返回  1
// )
// cache.put(3, 3);    // 该操作会使得关键字 2 作废
// console.log(
//     cache.get(2)       // 返回 -1 (未找到)
// )
// cache.put(4, 4);    // 该操作会使得关键字 1 作废
// console.log(
//     cache.get(1)       // 返回 -1 (未找到)
// )
// console.log(
//     cache.get(3)       // 返回  3
// )
// console.log(
//     cache.get(4)       // 返回  4
// )

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end