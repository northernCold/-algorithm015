学习笔记

| 递归类型 | 区别 |
| :--: | :--: |
| 一般递归 | - |
| 分支 | 有多个子递归，最终有多个子结果组成结构 |
| 回溯 | 有回溯，返回上一层或多层的情况 |

### 递归

等效于循环，通过函数体进行循环

找到最近重复子问题，拆分成解决子问题
数学归纳法

- 向下进入到不同执行环境，向上回到原来一层
- 当前层可以通过`return`可以将结果返回到上一层
- 每一层的环境都产生一份(拷贝)不变，变化的只有参数和返回值

一般递归的代码模板(JavaScript版)
```javascript
function recursion(level, param1, param2, ...) {
  //1.recursion terminator (终止条件)
  if (level > MAX_LEVEL) {
    return result;
  }

  //2. process logic in current level (逻辑处理)
  process(level, data);

  //3. drill down 进入下一层
  recursion(level + 1, param1, param2, ...);

  //4. reverse the current level status if need (如果必要的话，清除当前层的状态)
}
```

### 分治、回溯

分治和回溯就是一种特殊的递归

目的：找重复性，把问题拆分成多个子问题

分治的代码模板(JavaScript版)
```javascript
function divideConquer(problem, param1, param2, ...) {
  //1.recursion terminator (终止条件)
  if (level > MAX_LEVEL) {
    return result;
  }
  //2. prepare data
  data = prepareData(problem);

  //3. conquer subproblem (处理子问题))
  subResult1 = divideConquer(subProblems[0], p1, ...);
  subResult2 = divideConquer(subProblems[1], p1, ...);
  subResult3 = divideConquer(subProblems[2], p1, ...);
  ...

  //4. process and generate this final result (子结果组合，生成结果)
  result = processResult(subResult1, subResult2, ...);

  //5. revert this current states if need (如果必要的话，清除当前层的状态)
}
```