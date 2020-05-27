function postFix(exp) {
  let procedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 5 };
  let postFixExp = "";
  let stk = new Array();

  for (let i = 0; i < exp.length; i++) {
    if (procedence[exp[i]]) {
      if (stk.length > 0) {
        let last = stk[stk.length - 1];

        if (procedence[exp[i]] >= procedence[last]) {
          stk.push(exp[i]);
        } else {
          while (procedence[exp[i]] <= procedence[last] && stk.length > 0) {
            last = stk[stk.length - 1];
            postFixExp += stk.pop();
          }
          stk.push(exp[i]);
        }
      } else {
        stk.push(exp[i]);
      }
    } else {
      postFixExp += exp[i];
    }
  }

  while (stk.length > 0) {
    postFixExp += stk.pop();
  }
  return postFixExp;
}

console.log(postFix("a+b*c-d/e"));
console.log(postFix("a+b*c-d^e^f"));
