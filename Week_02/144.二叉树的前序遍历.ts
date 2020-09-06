/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
  * @date 0905
  * @description 递归
  * @time O(n)
  * @time O(n) 
  */
// function preorderTraversal(root: TreeNode | null): number[] {
//   const traverse = (root: TreeNode | null, result: number[]) => {
//     if (root === null) return;
//     result.push(root.val);
//     traverse(root.left, result);
//     traverse(root.right, result);
//   }
//   let result: number[] = [];
//   traverse(root, result)
//   return result;
// };

/**
 * @date 0905
 * @description 迭代 
 */
function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  let stack: Array<TreeNode | null> = [];
  let cur: TreeNode | null = root;
  while (cur !== null || stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur);
      result.push(cur.val);
      cur = cur.left;
    }

    cur = stack.pop() as (TreeNode | null);
    if (cur !== null) {
      cur = cur.right;
    }

  }

  return result;
}
// @lc code=end

