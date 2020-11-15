/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
class TrieNode {
  constructor () {
    this.links = new Array(26)
    this.end = false;
  }

  charValue (ch) {
    return ch.codePointAt(0) - 'a'.codePointAt(0);
  }
  get(ch) {
    return this.links[this.charValue(ch)];
  }

  containKey(ch) {
    return !!this.links[this.charValue(ch)];
  }
  put(ch, node) {
    this.links[this.charValue(ch)] = node;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return !!this.end;
  }
}
class Trie {
  constructor () {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (!node.containKey(ch)) {
        node.put(ch, new TrieNode())
      }
      node = node.get(ch);
    }
  }

  searchPrefix(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (node.containKey(ch)) {
        node = node.get(ch)
      } else {
        return null;
      }
    }
    return null;
  }
  search(word) {
    let node = this.searchPrefix(word);
    return node && node.isEnd();
  }

  startWidth(word) {
    let node = this.searchPrefix(word);
    return !!node;
  }
}
function findWords(board, words) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let result = [];
  let trie = new Trie();
  words.forEach(word => {
    trie.insert(word)  
  })
  const dfs = (x, y, word) => {
    if (!trie.startsWith(word)) return;
    if (x < 0 || y < 0 || x >= board.length || y >= board[x].length) return;
    if (trie.search(word)) {
      result.push(word);
      return;
    }
    let tmp = board[i][j];
    board[i][j] = "@"
    for (let i = 0; i < 4; i++) {
      word += board[dx[0]][dy[0]];
      dfs(dx[0], dy[0], word)
    }
    board[i][j] = tmp;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (trie.startsWith(board[i][j])) {
        dfs(i, j, board[i][j]);
      }
    }
  }
  console.log(trie)
};

findWords([], ["abc"]);
// @lc code=end

