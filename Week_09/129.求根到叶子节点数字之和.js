/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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

function sumNumbers(root) {
  let result = []
  if (!root) return 0;
  let traverse = (root, num) => {
    if (root === null) return;
    if (root.left === null && root.right === null) {
      result.push(num);
      return;
    };
    root.left && traverse(root.left, num * 10 + root.left.val);
    root.right && traverse(root.right, num * 10 + root.right.val);
  }
  traverse(root, root.val);
  return result.reduce((t, c) => t += c, 0);
};
// @lc code=end