/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */
// @lc code=start
function nthUglyNumber(n) {
    var table = new Set([1]);
    var result = 1;
    var heap = new BinaryHeap([1]);
    var t = 1;
    for (var i = 0; i < n; i++) {
        t = heap.pop();
        result = t;
        for (var _i = 0, _a = [2, 3, 5]; _i < _a.length; _i++) {
            var v = _a[_i];
            if (!table.has(t * v)) {
                table.add(t * v);
                heap.insert(t * v);
            }
        }
    }
    return result;
}
;
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(arr) {
        this.heap = arr || [];
        this.size = arr ? arr.length : 0;
    }
    BinaryHeap.prototype.pop = function () {
        var minElement = this.heap[0];
        this.size--;
        this.heap[0] = this.heap[this.size];
        this.heap.pop();
        this.heapifyDown(0);
        return minElement;
    };
    BinaryHeap.prototype.insert = function (value) {
        this.heap[this.size] = value;
        this.size++;
        this.heapifyUp(this.size - 1);
    };
    BinaryHeap.prototype.heapifyUp = function (i) {
        var t = this.heap[i];
        while (i > 0 && t < this.heap[this.parent(i)]) {
            this.heap[i] = this.heap[this.parent(i)];
            i = this.parent(i);
        }
        this.heap[i] = t;
    };
    BinaryHeap.prototype.heapifyDown = function (i) {
        var child;
        var t = this.heap[i];
        while (this.kthChild(i, 1) < this.size) {
            child = this.minChild(i);
            if (t < this.heap[child])
                break;
            this.heap[i] = this.heap[child];
            i = child;
        }
        this.heap[i] = t;
    };
    BinaryHeap.prototype.minChild = function (i) {
        var left = this.kthChild(i, 1);
        var right = this.kthChild(i, 2);
        if (left > this.size - 1)
            return right;
        if (right > this.size - 1)
            return left;
        return this.heap[left] < this.heap[right] ? left : right;
    };
    BinaryHeap.prototype.isEmpty = function () {
        return !!this.size;
    };
    BinaryHeap.prototype.parent = function (i) {
        return Math.floor((i - 1) / 2);
    };
    BinaryHeap.prototype.kthChild = function (i, k) {
        return i * 2 + k;
    };
    return BinaryHeap;
}());
// @lc code=end
nthUglyNumber(12);