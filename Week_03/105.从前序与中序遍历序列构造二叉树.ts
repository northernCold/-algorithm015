/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @date 0909
 * @description 前序遍历中找根节点，再从中序遍历找到根节点相应的位置。
 * @time O(n)
 * @space O(logn)
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return buildChildTree(preorder, 0, preorder.length, inorder, 0, inorder.length)
};

function buildChildTree(preorder: number[], pStart: number, pEnd: number, inorder: number[], iStart: number, iEnd: number): TreeNode | null {
  if (pStart === pEnd) return null;

  let rootVal: number = preorder[pStart];
  let root: TreeNode = new TreeNode(rootVal);
  
  let rootIdx: number = 0;
  let leftStep: number = 0;
  for (let i = iStart; i < iEnd; i++) {
    if (rootVal === inorder[i]) {
      rootIdx = i;
      leftStep = i - iStart;
      break;
    }
  }

  root.left = buildChildTree(preorder, pStart + 1, pStart + leftStep + 1, inorder, iStart, rootIdx);
  root.right = buildChildTree(preorder, pStart + leftStep + 1, pEnd, inorder, rootIdx + 1, iEnd);
  return root;
}
// @lc code=end

