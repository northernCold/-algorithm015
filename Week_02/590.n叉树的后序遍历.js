/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @date 0905
 * @description 递归
 * @time O(n)
 * @time O(n)
 */
// var postorder = function(root) {
//   let result = [];
//   const traverse = (root, result) => {
//     if (root === null) return;
//     root.children.forEach(child => {
//       traverse(child, result)
//     })
//     result.push(root.val);
//   }
//   traverse(root, result);
//   return result;
// };

// @lc code=end

