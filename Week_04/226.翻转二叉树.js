/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;
  let left = root.left;
  let right = root.right;
  let t;
  t = root.left;
  root.left = root.right;
  root.right = t;
  
  invertTree(left);
  invertTree(right);

  return root;
};
// @lc code=end

