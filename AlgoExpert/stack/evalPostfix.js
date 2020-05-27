function evalPostfix(exp) {
  let stk = [];
  let operator = { "+": true, "-": true, "*": true, "/": true, "^": true };

  for (let i = 0; i < exp.length; i++) {
    if (!operator[exp[i]]) {
      stk.push(exp[i] * 1);
    } else {
      let op2 = stk.pop();
      let op1 = stk.pop();

      let res;
      switch (exp[i]) {
        case "+":
          res = op1 + op2;
          break;
        case "-":
          res = op1 - op2;
          break;
        case "*":
          res = op1 * op2;
          break;
        case "/":
          res = op1 / op2;
          break;
        default:
          break;
      }
      stk.push(res);
    }
  }
  return stk[0];
}

console.log(evalPostfix("35*62/+4-"));
