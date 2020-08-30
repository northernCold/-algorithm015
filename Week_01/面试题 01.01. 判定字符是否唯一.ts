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
