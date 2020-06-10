function balancedBrackets(exp) {
  let stk = [];

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] == "(" || exp[i] == "{" || exp[i] == "[") {
      stk.push(exp[i]);
    } else {
      let lastItem = stk.pop();

      switch (exp[i]) {
        case "]":
          if (lastItem == "(" || lastItem == "{") {
            return false;
          }
          break;
        case "}":
          if (lastItem == "(" || lastItem == "[") {
            return false;
          }
          break;
        case ")":
          if (lastItem == "[" || lastItem == "{") {
            return false;
          }
          break;
        default:
          break;
      }
    }
  }

  return stk.length === 0 ? true : false;
}
console.log(balancedBrackets("(([](()){})"));
