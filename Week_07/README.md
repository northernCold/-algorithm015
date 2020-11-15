学习笔记

# 字典树

定义：字典树是一种树形结构。典型应用是用于统计和排序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。

优点：最大限度地减少无谓的字符串比较，查询效率比哈希表高。

基本性质
1.节点本身不存完整单词；
2.从根节点到某一节点，路径上经过的字符链接起来，为该节点对应的字符串；
3.每个节点的所有子节点路径代表的字符都不相同

核心思想：
Trie树的核心思想是空间换时间
利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的


```javascript
class TrieNode {
  consturct () {
    this.links = new Array(26); // 看做输入的字符串是不区分大小写的字母
    this.end = false;
  }

  charValue (ch) {
    return 'a'.codePointAt(0) - ch.codePoinAt(ch);
  }

  containKey (ch) {
    let idx = this.charValue(ch);
    return !!this.links[idx];
  }

  get (ch) {
    let idx = this.charValue(ch);
    return this.links[idx];
  }

  put (ch, node) {
    let idx = this.charValue(ch);
    this.links[ch] = node;
  }

  setEnd() {
    this.end = true;
  }
  
  isEnd() {
    return !!this.end;
  }
}

class Trie {
  construct () {
    this.root = new TrieNode();
  }

  insert (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (!node.containKey(ch)) {
        node.put(ch, new TrieNode);
      }
      node = node.get(ch);
    }
    node.setEnd();
  }

  search (word) {
    let node = this.searchPrefix(word);
    return node !== null && node.isEnd();
  }

  searchPrefix(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (node.containKey(ch)) {
        node = node.get(ch);
      } else {
        return null
      }
    }
    return;
  }

  startWith(prefix) {
    let node = this.searchPrefix(prefix);
    return !!node;
  }
}
```
# 并查集

[Union-Find 算法详解](https://leetcode-cn.com/problems/friend-circles/solution/union-find-suan-fa-xiang-jie-by-labuladong/)
[并查集入门](https://zhuanlan.zhihu.com/p/33619824)

### 适用场景

组团、配对问题

### 基本操作

- makeSet(s): 建立一个新的并查集，其中包含s个单元素集合

- unionSet(x, y)：把元素x和元素y所在的集合合并，要求x和y所在的集合不相交，如果相交则不合并

- find(x)：找到元素x所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，只要将它们各自的代表比较一下就可以了。


### 特性

根节点判断：索引值与值相等

### 实现

```javascript
class UnionFind {
  constructor (n) {
    this.makeSet(s);
  }

  makeSet(s) {
    let parent = [];
    for (let i = 0; i < s; i++) {
      parent[i] = i;
    }
    this.count = n;
    this.parent = parent;
  }

  unionSet(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    this.parent[rootX] = rootY;
    this.count--;
  }

  find(x) {
    let { parent } = this;
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]; // 优化 路径压缩
      x = parent[x];
    }
    return x;
  }

  getCount() {
    return this.count;
  }
}
```