/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * @date 0929
 * @description 递归
 * @time O(n)
 * @space O(n)
 * @mark leetcode提交ts版本代码会报编译错误时。 
 */
// function inorderTraversal(root) {
//   let result = [];
//   const traverse = (root, result) => {
//     if (root === null) return;
//     if (root.left) traverse(root.left, result);
//     result.push(root.val);
//     if (root.right) traverse(root.right, result);
//   }
//   traverse(root, result);
//   return result;
// };

/**
 * 
 */
// function inorderTraversal(root) {
//   if (root === null) return [];
//   let result = [];
//   let stack = [];
//   let cur = root;

//   while (cur !== null || stack.length !== 0) {
//     while (cur !== null) {
//       stack.push(cur);
//       cur = cur.left
//     }
//     cur = stack.pop();
//     result.push(cur.val);
//     cur = cur.right;
//   }

//   return result;
// }

/**
 * @date 0914
 * @description 迭代
 * @time O(n)
 * @space O(n)
 */
  function inorderTraversal(root) {
    let result = [];
    let stack = [];
    let cur = root;
    while (cur !== null || stack.length !== 0) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      result.push(cur.val);
      cur = cur.right;
    }

    return result
  }

let data = {
  val: 1,
  left: {
    val: 2,
    right: null,
    left: null
  },
  right: null
}
console.log(
  inorderTraversal(data)
)
// @lc code=end