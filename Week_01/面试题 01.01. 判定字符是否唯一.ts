/**
 * 哈希表
 * time: O(n) n为字符串的长度
 * spce: O(n)
 */
function isUnique(astr: string): boolean {
    let hash = new Map();
    for (let c of astr) {
        if (hash.has(c) === true) {
            return false
        }
        hash.set(c, true);
    }
    return true;
};

/**
 * 异或
 */

function isUnique(astr: string): boolean {
  if (astr.length <= 1) return true;
  let ret = 0;
  for (let c of astr) {
    ret = ret^c.codePointAt(0);
  }
  return ret !== 0;
};

function isUnique(astr) {
  let astrArr = astr.split("");
  astrArr.sort((a, b) => a.codePointAt(0) - b.codePointAt(0));
  for (let i = 0, j = i + 1; j < astrArr.length; i++, j++) {
    if (astrArr[i] === astrArr[j]) {
      return false;
    }
  }
  return true
};

/**
 * date: 09/01
 */
function isUnique(astr: string): boolean {
  let hash = new Map<string, boolean>();
  for (let c of astr) {
    if (hash.has(c)) {
      return false;
    } else {
      hash.set(c, true);
    }
  }

  return true;
};

/**
 * date: 09/01
 * method: 位运算。利用与(&)预算“取出”某个位置的数，或(|)可以进行相加
 * time: O(n)
 * space: O(1)
 */
function isUnique(astr: string): boolean {
  let ret = 0;
  for (let c of astr) {
    let move: number = c.codePointAt(0) - 'a'.codePointAt(0);
    if ((ret >> move & 1) === 1) {
      return false;
    } else {
      ret =  1 << move | ret
    }
  }

  return true;
}