/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class TrieNode {
    constructor () {
      this.links = new Array(26);
      this.end = false;
    }
    charValue(ch) {
      return ch.codePointAt(0) - 'a'.codePointAt(0)
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
      this.links[idx] = node;
    }
  
    setEnd() {
      this.end = true;
    }
  
    isEnd() {
      return !!this.end;
    }
  }
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let ch = word[i];
        if (!node.containKey(ch)) {
          node.put(ch, new TrieNode());
        }
        node = node.get(ch);
      }
      node.setEnd();
    }
  
    search(word) {
      let node = this.searchPrefix(word);
      return node != null && node.isEnd();
    }
  
    searchPrefix(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let ch = word[i];
        if (node.containKey(ch)) {
          node = node.get(ch);
        } else {
          return null;
        }
      }
      return node;
    }
  
    startsWith(prefix) {
      let node = this.searchPrefix(prefix);
      return !!node;
    }
  }
  
  /**
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */
  // @lc code=end
  
  