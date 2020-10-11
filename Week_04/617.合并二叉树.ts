/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
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

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  let root: TreeNode | null = {};
  const traverse = (root: TreeNode | null, t1: TreeNode | null, t2: TreeNode | null) => {
    if (t1 !== null) {
      root.val = t1.val;
      root.left = traverse(root, t1.left, null);
      root.right = traverse(root, t1.right, null);
    } else if (t2 !== null) {
      root.val =t2.val;
      root.left = traverse(root, null, t2.left);
      root.right = traverse(root, null, t2.right);
    } else {
      root.val = t1.val + t2.val;
      root.left = traverse(root, t1.left, t2.left);
      root.right = traverse(root, t1.right, t2.right);
    }
  }
  traverse(root, t1, t2);
  return root;
};
// @lc code=end

