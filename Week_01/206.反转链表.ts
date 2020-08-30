/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// function reverseList(head: ListNode | null): ListNode | null {
//   let list: ListNode | null = null;
//   let t: ListNode | null;
//   let cur: ListNode | null = head;
//   let newNode: ListNode | null;

//   while(cur !== null) {
//     if (list === null) {
//       newNode = new ListNode(cur.val, cur.next);
//       list = newNode;
//       list && (list.next = null); 
//     } else {
//       t = list;
//       newNode = new ListNode(cur.val, cur.next);
//       list = newNode;
//       list && (list.next = t); 
//     }
//     cur = cur.next;
//   }
//   return list;
// };

// function reverseList(head: ListNode | null): ListNode | null {
//   let [pre, cur]: [ListNode | null, ListNode | null] = [null, head];
//   while (cur !== null) {
//     [pre, cur.next, cur] = [cur, pre, cur.next]
//   }
//   return pre;
// }

// function reverseList(head: ListNode | null): ListNode | null {
//   let pre: ListNode | null = null
//   let t: ListNode | null;

//   while (head !== null) {
//     t = head.next;
//     head.next = pre;
//     pre = head;
//     head = t;
//   }
//   return pre;
// }

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let t: ListNode | null;

  while (head !== null) {
    t = head.next;
    head.next = pre;
    pre = head;
    head = t;
  }
  return pre;
}

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

reverseList(list);