function isBalancedParanthesis(exp) {

    let stack = [];

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == '(' || exp[i] == '[' || exp[i] == '{') {
            stack.push(exp[i]);
        } else if (exp[i] == ')' || exp[i] == ']' || exp[i] == '}') {
            if (stack.length == 0) {
                return false;
            }

            let last = stack.pop();
            switch (last) {
                case ')':
                    if (last !== '{' || last !== '[') {
                        return false;
                    }
                    break;

                case '}':
                    if (last !== '(' || last !== '[') {
                        return false;
                    }
                    break;

                case ']':
                    if (last !== '{' || last !== '(') {
                        return false;
                    }
                    break;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

// console.log(isBalancedParanthesis('{[(a+b)]*(c+b)/r}'));



