/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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
 * @date 0914
 * @description 递归(用额外的变量level记录当前层)
 * @time O(n)
 * @time O(logn)
 */
// function levelOrder(root: TreeNode | null): number[][] {
//   const traverse = (root: TreeNode | null, level: number = 0, result: number[][]) => {
//     if (root === null) return;
//     if (!Array.isArray(result[level])) {
//       result[level] = [root.val];
//     } else {
//       result[level].push(root.val);
//     }
//     traverse(root.left, level + 1, result);
//     traverse(root.right, level + 1, result);
//   }
//   let result: number[][] = [];
//   traverse(root, 0, result);

//   return result;
// };

/**
 * @date 0914
 * @description 迭代(广搜) 
 * 广搜得到的数组元素记录层级信息，根据每个元素层级信息遍历得到结果
 * @time O(n)
 * @space O(n)
 */
class LevelNode {
  node: TreeNode
  level: number
  constructor (node: TreeNode, level: number) {
    this.node = node;
    this.level = level;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  let list: Array<LevelNode> = [];
  let queue: Array<LevelNode> = []

  if (root === null) return [];
  queue.push(<LevelNode>{node: root, level: 0});
  
  while (queue.length !== 0) {
    let cur: LevelNode = <LevelNode>queue.shift();
    let { node, level } = cur;
    list.push(cur);
    node.left && queue.push(<LevelNode>{node: node.left, level: level + 1});
    node.right && queue.push(<LevelNode>{node: node.right, level: level + 1});
  }

  for (let i = 0; i < list.length; i++) {
    let { node, level } = list[i];
    if (!Array.isArray(result[level])) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }
  }

  return result;
}
// @lc code=end

