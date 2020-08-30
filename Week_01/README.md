学习笔记

## 学习方法：
职业训练
1. 构建知识体系
2. 刻意练习
    过编数
    练习缺陷、弱点地方
3. 反馈
    主动式
    高手代码
    被动式
    code review

刷题技巧：
1. Clarification

2. Possible solutions
  compare
  optional

3. Coding

4. Test cases

五毒刷题法
1. 2-5mins 读题+思考、.直接看题解、背诵默写

2. 马上coding
  多种解法比较、体会 => 优化

3. 过一天
  不同解法的熟练程度进行专项练习

4. 过了一周
  不熟练的题目进行专项练习

5. 面试前一周回复性练习

## 代码规范、快捷键
Code Style https://google.github.io/styleguide/jsguide.html

删除右边：fn + delete
行头/尾 fn + l/r
单词切分的头/尾 ctl + l/r
单词切分删除 ctl + delete
选取一行

自动补全

top tips


## Array 数组

定义：一段连续的内存地址

| 操作 | 时间复杂度 |
| :--: | :--------: |
| lookup |    O(1)    |
| insert |    O(n)    |
| delete |    O(n)    |

## Lined List 链表

由多个node(节点)链接的数据结构, node由value值和next(指向下一个node的地址)

| 操作 | 时间复杂度 |
| :--: | :--------: |
| lookup |    O(n)    |
| insert |    O(1)    |
| delete |    O(1)    |

应用：[LRU 缓存机制](http://leetcode-cn.com/problems/lru-cache)

## Skip List 跳表

加速有序链表，升维重一维链表变为二维链表，添加索引

特点：
 - ***有序***链表
 - 对标平衡树
 - 插入/删除/搜索 都是O(logn)
 - 原理简单、容易实现、方便扩展、效率更高 Redis、LevelDB

 | 操作 | 时间复杂度 |
| :--: | :--------: |
| lookup |    O(logn)    |
| insert |    O(logn)    |
| delete |    O(logn)    |

应用：[跳跃表、为啥 Redis 使用跳表（Skip List）而不是使用 Red-Black？](http://www.zhihu.com/question/20202931)

## stack 栈

先进后出(FILO)，添加、删除时间复杂度O(1)、查询为O(n)

## queue 队列

先进先出(FIFO)，添加、删除时间复杂度O(1)、查询为O(n)

## Deque 双端队列 

双端队列 两端可以进出的Queue，添加、删除时间复杂度O(1)

## Priority Queue 优先队列

插入O(1)、取出(按照元素的优先级取出)O(logn)

底层具体实现的数据结构多样：heap、bst、treap