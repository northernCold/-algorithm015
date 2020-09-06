/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
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
 * @space O(n)
 */
var levelOrder = function(root) {
  let result = [];
  const traverse = (root, level = 0) => {
    if (root === null) return;
    if (!result[level]) result[level] = [];
    result[level].push(root.val);
    ++level
    root.children.forEach(child => {
      traverse(child, level);
    })
  }
  traverse(root);
  return result;
};
// @lc code=end

