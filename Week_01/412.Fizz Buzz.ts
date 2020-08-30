function fizzBuzz(n: number): string[] {
  let ret: string[] = [];
  for (let i: number = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ret.push("FizzBuzz");
    } else if (i % 3 === 0) {
      ret.push("Fizz");
    } else if (i % 5 === 0) {
      ret.push("Buzz")
    } else {
      ret.push(i.toString());
    }
  }
  return ret
};

// 扩展性以及
function fizzBuzz(n: number): string[] {
  let ret: string[] = [];
  const divisibleBy3 = (num: number) => num % 3 === 0;
  const divisibleBy5 = (num: number) => num % 5 === 0;
  for (let i: number = 1; i <= n; i++) {
    let cur = "";
    if (divisibleBy3(i)) {
      cur += "Fizz";
    }
    if (divisibleBy5(i)) {
      cur += "Buzz";
    }
    if (cur === "") {
      cur += i;
    }
    ret.push(cur);
  }
  return ret;
};

// 在优化

